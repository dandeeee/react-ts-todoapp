import * as React from 'react'
import './App.css'
import AppRouter from './AppRouter'
import {TodoFilter} from './model/TodoList'
import { Task } from './model/Task'
import {AppState} from "./redux/AppState";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {
    actionAddTask, actionChangeFilter, actionFetchAllTasks, actionSetTasks,
    actionToggleTask
} from "./redux/AppActions";

interface Props {
    tasks: Array<Task>
    filter: TodoFilter

    fetchTasks: Function
    addTask: Function
    setTasks: Function
    toggleTask: Function
    changeFilter: Function
}

class App extends React.Component<Props, any> {

    componentWillMount() {
        this.props.fetchTasks(actionSetTasks)
    }

    handleTaskAdd(task: Task) {
        this.props.addTask(task)
    }

    handleTaskToggle(task: Task) {
        this.props.toggleTask(task)
    }

    handleFilterChange(newFilter: TodoFilter) {
        this.props.changeFilter(newFilter)
    }

    render() {
        return (
            <div className="App">
                <AppRouter
                    {...this.props}
                    onTaskAdd={(task: Task) => this.handleTaskAdd(task)}
                    onTaskToggle={(task: Task) => this.handleTaskToggle(task)}
                    onFilterChange={(newFilter: TodoFilter) => this.handleFilterChange(newFilter)}
                />
            </div>
        )
    }
}

const mapStateToProps = (state: AppState) => {
    return {
        tasks: state.tasks,
        filter: state.filter
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchTasks: bindActionCreators(actionFetchAllTasks, dispatch),
        addTask: bindActionCreators(actionAddTask, dispatch),
        setTasks: bindActionCreators(actionSetTasks, dispatch),
        toggleTask: bindActionCreators(actionToggleTask, dispatch),
        changeFilter: bindActionCreators(actionChangeFilter, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App as any)
