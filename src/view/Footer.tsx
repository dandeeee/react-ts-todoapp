import * as React from 'react'
import { Task } from '../model/Task'
import { TodoFilter } from '../model/TodoList'

interface FooterProps {
    tasks: Array<Task>
    filter: TodoFilter
    onFilterChange: Function
}

export default class Footer extends React.Component<FooterProps, {}> {
    render() {
        const {tasks, filter, onFilterChange} = this.props
        const completedTasks = tasks.filter(t => t.isCompleted)

        return (
            <div>
                <span style={styles.taskCounter}>{completedTasks.length}/{tasks.length}</span>
                <a href='#' onClick={() => onFilterChange(TodoFilter.ALL)} style={filter === TodoFilter.ALL ? styles.activeFilter : {}}>All</a>&nbsp;
                <a href='#' onClick={() => onFilterChange(TodoFilter.DONE)} style={filter === TodoFilter.DONE ? styles.activeFilter : {}}>Done</a>&nbsp;
                <a href='#' onClick={() => onFilterChange(TodoFilter.TODO)} style={filter === TodoFilter.TODO ? styles.activeFilter : {}}>Todo</a>&nbsp;
            </div>
        )
    }
}

const styles = {
    taskCounter: {
        position: "absolute" as 'absolute',
        left: '10px'
    },

    activeFilter: {
        color: 'green'
    }
}