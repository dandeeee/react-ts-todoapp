const Task = require("./model/Task");

const express = require('express')
const app = express()
const port = 9000

const tasks = [
    new Task('Server task 1'),
    new Task('Server task 2'),
    new Task('Server task 3')
]

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (request, response) => {
  response.send(200, tasks)
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})