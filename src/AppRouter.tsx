import * as React from 'react'
import TodosPage from './view/TodosPage'
import TodoPage from './view/TodoPage'
import { Task } from './model/Task'
import { TodoFilter } from './model/TodoList'

interface Props {
    tasks: Array<Task>
    filter: TodoFilter
    onTaskAdd: Function
    onTaskToggle: Function
    onFilterChange: Function
}

interface State {
    args?: any
}

export default class AppRouter extends React.Component<Props, State> {
    private static intance: AppRouter

    constructor(props: any) {
        super(props)
        this.state = {}
        AppRouter.intance = this
    }

    static goto(path: string, args?: any) {
        window.history.pushState('page2', 'Title', path)
        AppRouter.intance.setState({args})
    }

    render() {
        const {pathname} = window.location
        const {args = {}} = this.state

        if(pathname === '/') {
            return (<TodosPage
                tasks={this.props.tasks}
                filter={this.props.filter}
                onTaskAdd={this.props.onTaskAdd}
                onTaskToggle={this.props.onTaskToggle}
                onFilterChange={this.props.onFilterChange}
            />)
        } else if(['/todos', '/todos/'].indexOf(pathname) !== -1) {
            return <h1>todos</h1>
        } else if(/\/todos\/[0-9]*/.test(pathname)) {
            // const id = pathname.replace('/todos/', '')
            return <TodoPage task={args.task} />
        } else {
            return <h1>404 not found</h1>
        }
    }
}


