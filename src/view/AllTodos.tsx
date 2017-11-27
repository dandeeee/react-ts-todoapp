import * as React from 'react'
import { getStubTaskList } from '../model/TodoList'
import { Task } from '../model/Task'

export default class AllTodos extends React.Component {
    render() {
        const tasks = getStubTaskList()
        const items = tasks.map((task, i) => <TodoItem key={i} task={task} />)

        return <ul style={styles.ul}>{items}</ul>
    }
}

interface TodoItemProps {
    task: Task
}

class TodoItem extends React.Component<any, TodoItemProps> {
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
        fontSize: '24px',
        borderBottom: '1px solid #ededed'
    }
}