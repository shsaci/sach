import express from 'express'

const app = express()
const PORT = process.env.PORT || 3000

import index from './routes/index'

app.use('/', express.static('public'))

app.get('/', index.get)

app.listen(PORT, function () {
  console.log('Listening on port', PORT)
})
