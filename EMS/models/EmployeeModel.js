const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EmployeeSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  basicSalary: {
    type: Number,
    required: true
  }
})

module.exports = EmployeeSchema
