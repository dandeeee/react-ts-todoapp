import * as React from 'react'
import './App.css'
import Header from './view/Header'
import TodosPane from './view/TodosPane'
import AddTodo from './view/AddTodo'
import AllTodos from './view/AllTodos'
import Footer from './view/Footer'
import { getStubTaskList } from './model/TodoList'
import { Task } from './model/Task'

interface AppState {
    tasks: Array<Task>
}

class App extends React.Component<{}, AppState> {
    constructor(props: any) {
        super(props)
        this.state = {
            tasks: getStubTaskList()
        }
    }

    render() {
        const {tasks,} = this.state
        return (
            <div className="App">
                <Header />
                <TodosPane>
                    <AddTodo />
                    <AllTodos tasks={tasks} />
                    <Footer tasks={tasks} />
                </TodosPane>
            </div>
        )
    }
}

export default App
