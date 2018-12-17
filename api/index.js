const express = require('express')
const bodyParser = require ('body-parser')
const jwt = require('jsonwebtoken')

const { config } = require('./config')

const app = express()

//body parse
app.use(bodyParser.json())

app.get('/api/auth/token', (req, res) => {
  console.log('GET: api/auth/token')
})

app.post('/api/auth/token', (req, res) => {
  console.log('POST: api/auth/token')
  console.log('POST: api/auth/token')
  const { email, username, name } = req.body
  const token = jwt.sign({ sub: username, email, name }, config.authJwtSecret)
  res.json({ access_token: token})
})

const server = app.listen(5000, function() {
  console.log('Listening localhost:5000 🚦')
})