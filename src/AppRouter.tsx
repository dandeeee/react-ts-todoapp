import * as React from 'react'
import TodosPage from './view/TodosPage'
import TodoPage from './view/TodoPage'

interface State {
    args?: any
}

export default class AppRouter extends React.Component<{}, State> {
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
            return <TodosPage />
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


