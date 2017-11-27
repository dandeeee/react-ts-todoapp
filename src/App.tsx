import * as React from 'react'
import './App.css'
import Header from './view/Header'
import TodosPane from './view/TodosPane'
import AddTodo from './view/AddTodo'
import AllTodos from './view/AllTodos'
import Footer from './view/Footer'

class App extends React.Component {
  render() {
    return (
      <div className="App">
          <Header />
          <TodosPane>
              <AddTodo />
              <AllTodos />
              <Footer />
          </TodosPane>
      </div>
    )
  }
}

export default App
