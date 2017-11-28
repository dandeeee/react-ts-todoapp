import * as React from 'react'
import TodosPage from './view/TodosPage'

export default class AppRouter extends React.Component {
    private static intance: AppRouter

    constructor(props: any) {
        super(props)
        AppRouter.intance = this
    }

    static goto(path: string) {
        window.history.pushState('page2', 'Title', path)
        AppRouter.intance.forceUpdate()
    }

    render() {
        const {pathname} = window.location

        if(pathname === '/') {
            return <TodosPage/>
        } else if(['/todos', '/todos/'].indexOf(pathname) !== -1) {
            return <h1>todos</h1>
        } else if(/\/todos\/[0-9]*/.test(pathname)) {
            const id = pathname.replace('/todos/', '')
            return <h1>{id}</h1>
        } else {
            return <h1>404 not found</h1>
        }
    }
}


