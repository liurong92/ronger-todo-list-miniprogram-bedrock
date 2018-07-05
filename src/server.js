const express = require('express')
const PORT = process.env.PORT || 3000
const app = express()

app.get('/', (req, res) =>
    res.status(200).send({
      message: 'Welcome tod the beginning of nothingness.',
    })
  )

app.get('/hello', (req, res) =>
    res.status(200).send({
      id: '123',
    })
  )

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
