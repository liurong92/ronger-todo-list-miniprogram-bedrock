import express from 'express'
const PORT = process.env.PORT || 3000
const app = express()
import {login} from './login/login'

app.get('/api', login)

app.get('/api/hello', (req, res) =>
    res.status(200).send({
      id: '123',
    })
  )

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
