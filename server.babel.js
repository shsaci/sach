import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'

const app = express()
const PORT = process.env.PORT || 3000

import index from './routes/index'

app.use(cors())
app.use('/', express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/profile/:id', index.profile)
app.get('/home', index.blurbs)
app.post('/profile/:id', index.add)

app.listen(PORT, function () {
  console.log('Listening on port', PORT)
})
