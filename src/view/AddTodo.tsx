import * as React from 'react'
import { Task } from '../model/Task'

interface AddTodoProps {
    onAdd: Function
}

export default class AddTodo extends React.Component<AddTodoProps, {}> {

    handleAdd(e: any) {
        if(e.keyCode === 13){
            this.props.onAdd(new Task(e.target.value))
            e.target.value = ''
        }
    }

    render() {
        return (<div>
            <input placeholder="What needs to be done?" onKeyDown={(e) => this.handleAdd(e)} />
        </div>)
    }
}