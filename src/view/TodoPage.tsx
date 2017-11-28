
import * as React from 'react'
import { Task } from '../model/Task'
import { Link } from 'react-router-dom'


interface Props {
    task: Task
}

export default class TodoPage extends React.Component<Props, {}> {

    render() {
        const {task} = this.props

        return (
            <div>
                <h1>{task.id}</h1>
                <h2>{task.title}</h2>
                <h3>{task.isCompleted ? 'DONE!' : 'Never give up...'}</h3>
                <Link to={`/`}>Go back</Link>
            </div>
        )
    }
}