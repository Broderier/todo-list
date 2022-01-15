const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = 3000

mongoose.connect('mongodb://localhost/todo-list')

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
})

app.get('/', (req, res) => {
  app.send('Hello, world')
})

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})