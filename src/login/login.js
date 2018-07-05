const express = require('express')
const login = express()

login.get('/:id', (req, res) =>
  res.status(200).send({
    message: 'Welcome tod the beginning of nothingness.',
  })
)

export {login}