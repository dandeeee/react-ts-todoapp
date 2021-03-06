import * as React from 'react'
import { Task } from '../model/Task'
import { TodoFilter } from '../model/TodoList'
import { Link } from 'react-router-dom'

interface AllTodosProps {
    tasks: Array<Task>
    filter: TodoFilter
    onToggle: Function
}

export default class TodosList extends React.Component<AllTodosProps, {}> {
    render() {
        const {tasks, filter = TodoFilter.ALL, onToggle} = this.props
        const filtered = tasks.filter(task => {
                return (
                    filter === TodoFilter.ALL ||
                    (filter === TodoFilter.TODO && task.isCompleted == false) ||
                    (filter === TodoFilter.DONE && task.isCompleted == true)
                )
            })
        const items = filtered.map((task, i) => <TodoItem task={task} onToggle={(task: Task) => onToggle(task)} key={i} />)

        return <ul style={styles.ul}>{items}</ul>
    }
}

interface TodoItemProps {
    task: Task
    onToggle: Function
}

class TodoItem extends React.Component<TodoItemProps, {}> {

    toggleTask() {
        const {task, onToggle} = this.props
        onToggle(task)
    }

    render() {
        const {task} = this.props

        return (
            <li style={styles.li}>
                <input type="checkbox" onChange={() => this.toggleTask()} checked={task.isCompleted} />
                <Link to={`/todos/${task.id}`}>
                    <label>{task.title}</label>
                </Link>
            </li>
        )
    }
}

const styles = {
    ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none'
    },

    li: {
        display: 'list-item',
        textAlign: '-webkit-match-parent',
        fontSize: '14px',
        borderBottom: '1px solid #ededed'
    }
}