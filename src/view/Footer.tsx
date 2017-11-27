import * as React from 'react'
import { Task } from '../model/Task'

interface FooterProps {
    tasks: Array<Task>
}

export default class Footer extends React.Component<FooterProps, {}> {
    render() {
        const {tasks} = this.props
        const completedTasks = tasks.filter(t => t.isCompleted)

        return (
            <div>
                <span style={styles.taskCounter}>{completedTasks.length}/{tasks.length}</span>
                <a href='#'>All</a>&nbsp;
                <a href='#'>Done</a>&nbsp;
                <a href='#'>Todo</a>&nbsp;
            </div>
        )
    }
}

const styles = {
    taskCounter: {
        position: "absolute" as 'absolute',
        left: '10px'
    }
}