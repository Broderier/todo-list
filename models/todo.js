const mongoose = require('mongoose')
const { stringify } = require('nodemon/lib/utils')
const Schema = mongoose.Schema

const todoSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  isDone: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('Todo', todoSchema)