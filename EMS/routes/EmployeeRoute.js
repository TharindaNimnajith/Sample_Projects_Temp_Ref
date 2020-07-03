const express = require('express')
const router = express.Router()
const Employee = require('../models/EmployeeModel')

router.get('/get1', (req, res) => {
  res.send('API 1 executed.')
})

router.get('/get2', (req, res) => {
  res.send('API 2 executed.')
})

router.post('/test', (req, res) => {
  res.send('API executed.')
  console.log(req.body)
})

/*
  method: POST
  description: Create new employee
*/
router.post('/create', (req, res) => {
  const employee = new Employee({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    age: req.body.age,
    basicSalary: req.body.basicSalary
  })
  try {
    employee.save()
      .then(emp => {
        console.log('Employee added.')
        res.status(200).send({
          message: 'Employee created successfully.',
          data: emp
        })
      })
  } catch (err) {

  }
})

router.get('/getAll', (req, res) => {
  const emps = Employee.find().then(employees => {
    res.send(employees)
  })
})

router.get('/get/:id', (req, res) => {
  Employee.findById(req.params.id).then(employee => {
    res.status(200).send(employee)
  })
})

router.get('/getByFirstName/:name', (req, res) => {
  // first data only
  // Employee.findOne({
  //   firstName: req.params.name
  // }).then(employee => {
  //   if (employee) {
  //     res.status(200).send(employee)
  //   } else {
  //     console.log('Invalid name.')
  //   }
  // })

  // all data
  Employee.find({
    firstName: req.params.name
  }).then(employee => {
    if (employee) {
      res.status(200).send(employee)
    } else {
      console.log('Invalid name.')
    }
  })

  // all data
  // Employee.find({
  //   firstName: req.params.name,
  //   lastName: 'ABC'
  // }).then(employee => {
  //   if (employee) {
  //     res.status(200).send(employee)
  //   } else {
  //     console.log('Invalid name.')
  //   }
  // })
})

router.delete('/delete/:id', (req, res) => {
  Employee.findById(req.params.id).then(employee => {
    if (emp) {
      employee.remove()
      res.send(employee.firstName + 'deleted successfully.')

      employee.remove()
    } else {
      res.send('Invalid employee id.')
    }
  })
})

module.exports = router
