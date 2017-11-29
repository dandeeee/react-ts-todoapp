import * as React from 'react'
import TodosPage from './view/TodosPage'
import TodoPage from './view/TodoPage'
import { Task } from './model/Task'
import { TodoFilter } from './model/TodoList'
import { Redirect, Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

interface Props {
    tasks: Array<Task>
    filter: TodoFilter
    onTaskAdd: Function
    onTaskToggle: Function
    onFilterChange: Function
}

export default class AppRouter extends React.Component<Props, {}> {
    constructor(props: any) {
        super(props)
        this.state = {}
    }

    render() {

        const findTask = (id: number): Task | undefined => {
            return this.props.tasks.find(t => t.id == id)
        }

        return (
            <BrowserRouter>
                <Switch>
                    <Route exact={true} path="/" render={() => <TodosPage {...this.props} />} />

                    <Redirect exact={true} from='/todos' to='/'/>

                    <Route
                        exact={true}
                        path={`/todos/:id`}
                        render={
                            ({match: {params: {id}}}) => {
                                const task = findTask(id)
                                return task ? <TodoPage task={task} /> : <h1>404</h1>
                            }
                        }
                    />

                    <Route exact={true} path="*" render={() => <h1>404 not found</h1>} />
                </Switch>
            </BrowserRouter>
        )
    }
}


