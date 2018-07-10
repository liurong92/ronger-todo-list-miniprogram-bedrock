import express from 'express'
import models from '../../models'

const todoList = express()

todoList.get('/:openId', async (req, res) => {
  const openId = req.params.openId
  if (!openId) {
    res.status(200).send({
      todoList: []
    })
  }
  const items = await models.Items.findAll({
    where: {
      openId,
    }
  }).then((items) => {
    return items.map((item) => {
      return item.dataValues
    })
  })

  res.status(200).send({
    todoList: items
  })
})

todoList.post('/:openId', (req, res) => {
  console.log(req, '----------')
  console.log(res, '--------------')
  res.status(200).send('dddddd')
})

export {todoList}