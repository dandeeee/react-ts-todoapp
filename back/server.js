const Task = require("./model/Task");

const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 9000

const tasks = [
    new Task('Server task 1'),
    new Task('Server task 2'),
    new Task('Server task 3')
]

app.use(bodyParser());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

app.get('/todos', (request, response) => {
  setTimeout(() => {
      response.send(200, tasks)
  }, 1000)
})

app.put('/todos', (request, response) => {
    if(request.body.title){
        const task = new Task(request.body.title)
        tasks.push(task)
        setTimeout(() => {
            response.send(201, task)
        }, 1000)
    } else {
        response.send(400, 'not created')
    }
})

app.post('/todos/:id', (request, response) => {
    const newTask = request.body
    const taskPosition = tasks.findIndex(t => t.id == request.params.id)

    if(taskPosition){
        const persistedTask = tasks[taskPosition]
        const updatedTask = Object.assign(new Task(), persistedTask, newTask)
        tasks[taskPosition] = updatedTask
        setTimeout(() => {
            response.send(200, updatedTask)
        }, 1000)
    } else {
        response.send(404, 'not found')
    }
})


app.get('/todos/:id', (request, response) => {
    const task = tasks.find(t => t.id == request.params.id)

    setTimeout(() => {
        if(task){
            response.send(200, task)
        } else {
            response.send(404)
        }
    }, 1000)
})


app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})