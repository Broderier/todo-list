const express = require('express')
const router = express.Router()

const Todo = require('../../models/todo')

router.get('/', (req, res) => {
  // 拿到全部todo資料
  Todo.find()
    .lean()
    .sort({ name: 'asc' })
    .then(todos => res.render('index', { todos }))
    .catch(error => console.error(error))
})

module.exports = router