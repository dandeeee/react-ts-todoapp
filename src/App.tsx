import * as React from 'react'
import './App.css'
import Header from './view/Header'
import TodosPane from './view/TodosPane'
import AddTodo from './view/AddTodo'
import AllTodos from './view/AllTodos'
import Footer from './view/Footer'
import { getStubTaskList, TodoFilter } from './model/TodoList'
import { Task } from './model/Task'

interface AppState {
    tasks: Array<Task>,
    filter: TodoFilter
}

class App extends React.Component<{}, AppState> {
    constructor(props: any) {
        super(props)
        this.state = {
            tasks: getStubTaskList(),
            filter: TodoFilter.ALL
        }
    }

    handleAddTodo(task: Task) {
        this.setState({
            tasks: [...this.state.tasks, task]
        })
    }

    render() {
        const {tasks, filter} = this.state
        return (
            <div className="App">
                <Header />
                <TodosPane>
                    <AddTodo onAdd={(task: Task) => this.handleAddTodo(task)} />
                    <AllTodos tasks={tasks} filter={filter} />
                    <Footer tasks={tasks} filter={filter} />
                </TodosPane>
            </div>
        )
    }
}

export default App
