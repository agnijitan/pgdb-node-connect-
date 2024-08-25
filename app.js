const express = require('express')
const bodyParser = require('body-parser')
const db = require('./dbConnector')

const app = express()
const port = 3333

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/emp', db.getEmployees) 
app.get('/emp/id/:roll', db.getEmpById) 
app.get('/emp/age/:age', db.getEmpByAge) 
app.get('/emp/salary/:salary', db.getEmpBySalary) 


app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})