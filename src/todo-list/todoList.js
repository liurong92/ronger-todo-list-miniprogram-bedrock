import express from 'express'
import compact from 'lodash/compact'
import difference from 'lodash/difference'
import {createItems, deleteItems, getTodoListByOpenId, updateItems} from './todoListUtils'

const todoList = express()

todoList.get('/:openId', async (req, res) => {
  const openId = req.params.openId
  if (!openId) {
    res.status(200).send({
      todoList: []
    })
  }
  const items = await getTodoListByOpenId(openId)

  res.status(200).send({
    todoList: items
  })
})

todoList.post('/:openId', async (req, res) => {
  const openId = req.params.openId
  const currentlyTodoList = req.body.todoList
  const needCreateTodoList = currentlyTodoList.filter(currentlyTodo => !currentlyTodo.id)

  if (currentlyTodoList.length === 0) {
    res.status(200).send('create success')
  }
  const previouslyTodoList = await getTodoListByOpenId(openId)

  await createItems(needCreateTodoList, openId)

  const previouslyTodoListIds = compact(previouslyTodoList.map((previouslyTodo) => previouslyTodo.id))
  const currentlyTodoListIds = compact(currentlyTodoList.map((currentlyTodo) => currentlyTodo.id))
  const deleteTodoListIds = difference(previouslyTodoListIds, currentlyTodoListIds)

  await updateItems(currentlyTodoList)
  await deleteItems(deleteTodoListIds)

  res.status(200).send('update success')
})

export {todoList}