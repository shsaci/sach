import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()
const PORT = process.env.PORT || 3000

import index from './routes/index'

app.use(cors())
app.use('/', express.static('public'))
app.use(bodyParser.json())

app.get('/profile/:id', index.profile)
app.get('/home', index.blurbs)
app.post('/profile/:id', index.add)

app.listen(PORT, function () {
  console.log('Listening on port', PORT)
})
