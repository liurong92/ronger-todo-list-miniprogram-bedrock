import compact from 'lodash/compact'
import isEmpty from 'lodash/isEmpty'
import models from '../../models'
import forEach from 'lodash/forEach'

export const getTodoListByOpenId = async (openId) => {
  return models.Items.findAll({
    where: {
      openId,
    }
  }).then((items) => {
    return items.map((item) => {
      return item.dataValues
    })
  })
}

export const isEmptyArray = (array) => {
  return isEmpty(compact(array))
}

export const createItems = (todoList, openId) => {
  if (openId && !isEmptyArray(todoList)) {
    forEach(todoList, todo => {
      models.Items.create({
        index: todo.index,
        value: todo.value,
        openId: openId
      })
    })
  }
}

export const updateItems = (currentlyTodoList) => {
  if (!isEmptyArray(currentlyTodoList)) {
    forEach(currentlyTodoList, currentlyTodo => {
      models.Items.update({
        complete: currentlyTodo.complete
      }, {
        where: {
          id: currentlyTodo.id
        }
      })
    })
  }
}

export const deleteItems = (deleteTodoListIds) => {
  if (!isEmptyArray(deleteTodoListIds)) {
    forEach(deleteTodoListIds, deleteTodoId => {
      models.Items.destroy({
        where: {
          id: deleteTodoId
        }
      })
    })
  }
}