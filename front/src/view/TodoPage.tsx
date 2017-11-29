
import * as React from 'react'
import { Task } from '../model/Task'
import { Link } from 'react-router-dom'
import API from "../API";


interface Props {
    taskId: string
}

interface State {
    task: Task | undefined
    err?: {code: string}
}

export default class TodoPage extends React.Component<Props, State> {

    constructor(props: any) {
        super(props)
        this.state = {
            task: undefined
        }
    }

    componentWillMount() {
        const {taskId} = this.props

        API.get(`/todos/${taskId}`).then(task => {
            this.setState({task})
        }).catch(err => {
            this.setState({err})
        })
    }

    render() {
        const {task, err} = this.state

        if(task) {
            return (
                <div>
                    <h1>{task.id}</h1>
                    <h2>{task.title}</h2>
                    <h3>{task.isCompleted ? 'DONE!' : 'Never give up...'}</h3>
                    <Link to={`/`}>Go back</Link>
                </div>
            )
        } else if(err) {
            return <h2>Error {err.code}</h2>
        } else {
            return <h3>Fetching task data</h3>
        }
    }
}