import * as React from 'react'
import { Task } from '../model/Task'

interface AllTodosProps {
    tasks: Array<Task>
}

export default class AllTodos extends React.Component<AllTodosProps, {}> {
    render() {
        const {tasks} = this.props
        const items = tasks.map((task, i) => <TodoItem key={i} task={task} />)

        return <ul style={styles.ul}>{items}</ul>
    }
}

interface TodoItemProps {
    task: Task
}

class TodoItem extends React.Component<TodoItemProps, {}> {
    render() {
        const {task} = this.props

        return (
            <li style={styles.li}>
                <div>
                    <input type="checkbox" />
                    <label>{task.title}</label>
                </div>
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