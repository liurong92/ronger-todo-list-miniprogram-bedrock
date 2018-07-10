import express from 'express'

const todoList = express()

todoList.get('/:userCode', async (req, res) => {
  const userCode = req.params.userCode
  if (userCode) {
    res.status(200).send({
      todoList: [{
        id: '1',
        value: 'test test',
        complete: true
      }]
    })
  }

  res.status(200).send({
    todoList: []
  })
})


export {todoList}