import express from 'express'
import bodyParser from 'body-parser'
const PORT = process.env.PORT || 3000
const app = express()

import {todoList} from './todo-list/todoList'
import {user} from './user/user'

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/api/user', user)
app.use('/api/todo-list', todoList)

app.get('/api/hello', (req, res) =>
  res.status(200).send({
    id: '123',
  })
)

app.listen(PORT)
