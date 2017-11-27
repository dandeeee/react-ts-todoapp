import * as React from 'react'
import './App.css'
import Header from './view/Header'
import TodosPane from './view/TodosPane'
import AddTodo from './view/AddTodo'
import AllTodos from './view/AllTodos'
import Footer from './view/Footer'
import { getStubTaskList, TodoFilter } from './model/TodoList'
import { Task } from './model/Task'

interface AppState {
    tasks: Array<Task>,
    filter: TodoFilter
}

class App extends React.Component<{}, AppState> {
    constructor(props: any) {
        super(props)
        this.state = {
            tasks: getStubTaskList(),
            filter: TodoFilter.ALL
        }
    }

    handleTaskAdd(task: Task) {
        this.setState({
            tasks: [...this.state.tasks, task]
        })
    }

    handleTaskToggle(task: Task) {
        const {tasks} = this.state
        const taskPosition = tasks.findIndex(t => t.title === task.title)
        task.isCompleted = !task.isCompleted
        const newTasks = tasks.map((t, i) => i === taskPosition ? task : t)
        this.setState({
            tasks: newTasks
        })
    }

    handleFilterChange(newFilter: TodoFilter) {
        this.setState({
            filter: newFilter
        })
    }

    render() {
        const {tasks, filter} = this.state
        return (
            <div className="App">
                <Header />
                <TodosPane>
                    <AddTodo onAdd={(task: Task) => this.handleTaskAdd(task)} />
                    <AllTodos tasks={tasks} filter={filter} onToggle={(task: Task) => this.handleTaskToggle(task)} />
                    <Footer tasks={tasks} filter={filter} onFilterChange={(newFilter: TodoFilter) => this.handleFilterChange(newFilter)} />
                </TodosPane>
            </div>
        )
    }
}

export default App
