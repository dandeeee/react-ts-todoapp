import * as React from 'react'
import Header from './Header'
import TodosPane from './TodosPane'
import AddTodo from './AddTodo'
import Footer from './Footer'
import AllTodos from './TodosList'
import { Task } from '../model/Task'
import { TodoFilter } from '../model/TodoList'


interface Props {
    tasks: Array<Task>
    filter: TodoFilter
    onTaskAdd: Function
    onTaskToggle: Function
    onFilterChange: Function
}

export default class TodosPage extends React.Component<Props, {}> {

    render() {
        const {tasks, filter, onTaskAdd, onTaskToggle, onFilterChange} = this.props

        if(tasks.length !== 0) {
            return (
                <div>
                    <Header />
                    <TodosPane>
                        <AddTodo onTaskAdd={(task: Task) => onTaskAdd(task)} />
                        <AllTodos tasks={tasks} filter={filter} onToggle={(task: Task) => onTaskToggle(task)} />
                        <Footer tasks={tasks} filter={filter} onFilterChange={(newFilter: TodoFilter) => onFilterChange(newFilter)} />
                    </TodosPane>
                </div>
            )
        } else {
            return <h3>Loading...</h3>
        }
    }
}