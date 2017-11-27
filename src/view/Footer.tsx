import * as React from 'react'
import { Task } from '../model/Task'
import { TodoFilter } from '../model/TodoList'

interface FooterProps {
    tasks: Array<Task>
}

interface FooterState {
    filter: TodoFilter
}

export default class Footer extends React.Component<FooterProps, FooterState> {

    constructor(props: any) {
        super(props)
        this.state = {
            filter: TodoFilter.DONE
        }
    }

    render() {
        const {tasks} = this.props
        const {filter} = this.state
        const completedTasks = tasks.filter(t => t.isCompleted)

        return (
            <div>
                <span style={styles.taskCounter}>{completedTasks.length}/{tasks.length}</span>
                <a href='#' style={filter === TodoFilter.ALL ? styles.activeFilter : {}}>All</a>&nbsp;
                <a href='#' style={filter === TodoFilter.DONE ? styles.activeFilter : {}}>Done</a>&nbsp;
                <a href='#' style={filter === TodoFilter.TODO ? styles.activeFilter : {}}>Todo</a>&nbsp;
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