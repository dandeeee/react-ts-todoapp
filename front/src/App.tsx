import * as React from 'react'
import './App.css'
import AppRouter from './AppRouter'
import { TodoFilter } from './model/TodoList'
import { Task } from './model/Task'
import API from "./API";

interface State {
    tasks: Array<Task>
    filter: TodoFilter
}

class App extends React.Component<{}, State> {

    constructor(props: any) {
        super(props)
        this.state = {
            tasks: [],
            filter: TodoFilter.ALL
        }
    }

    componentWillMount() {
        API.get('/todos').then((tasks: Array<Task>) => {
            this.setState({ tasks })
        })
    }

    handleTaskAdd(task: Task) {
        API.put('/todos', task).then(createdTask => {
            this.setState({
                tasks: [...this.state.tasks, createdTask]
            })
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
        return (
            <div className="App">
                <AppRouter
                    {...this.state}
                    onTaskAdd={(task: Task) => this.handleTaskAdd(task)}
                    onTaskToggle={(task: Task) => this.handleTaskToggle(task)}
                    onFilterChange={(newFilter: TodoFilter) => this.handleFilterChange(newFilter)}
                />
            </div>
        )
    }
}

export default App
