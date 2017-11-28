
import * as React from 'react'
import Header from './Header'
import TodosPane from './TodosPane'
import AddTodo from './AddTodo'
import Footer from './Footer'
import AllTodos from './TodosList'
import { Task } from '../model/Task'
import { getStubTaskList, TodoFilter } from '../model/TodoList'


interface State {
    tasks: Array<Task>,
    filter: TodoFilter
}

export default class TodosPage extends React.Component<{}, State> {

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
            <div>
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