const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const EmployeeRoute = require('./routes/EmployeeRoute')

app.use(bodyParser.json())
app.use(cors())
app.use('/api/employee', EmployeeRoute)

const uri = process.env.ATLAS_URI
const port = process.env.PORT

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}

mongoose.connect(uri, options)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
