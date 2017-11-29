import {Task} from "../model/Task";
import {FILTER_SET, TASKS_ADD_ONE, TASKS_SET_ALL, TASKS_UPDATE_ONE} from "./ActionTypes";
import {TodoFilter} from "../model/TodoList";
import {Action} from "redux-actions";
import API from "../API";

export function actionFetchAllTasks(onSuccessAction?: (payload: any) => Action<any>): any {
    return (dispatch: any) => {
        API.get('/todos')
            .then(tasks => {
                onSuccessAction ? dispatch(onSuccessAction(tasks)) : null
            })
            .catch(err => {
                throw new Error(JSON.stringify(err.message || err))
            })
    }
}

export function actionAddTask(task: Task): any {
    return (dispatch: any) => {
        API.put('/todos', task)
            .then(task => {
                dispatch({
                    type: TASKS_ADD_ONE,
                    payload: task
                })
            })
            .catch(err => {
                throw new Error(JSON.stringify(err.message || err))
            })
    }
}

export function actionSetTasks(tasks: Array<Task>): any {
    return {
        type: TASKS_SET_ALL,
        payload: tasks
    }
}

export function actionToggleTask(task: Task): any {
    return (dispatch: any) => {
        task.isCompleted = !task.isCompleted
        API.post(`/todos/${task.id}`, task)
            .then(updatedTask => {
                dispatch({
                    type: TASKS_UPDATE_ONE,
                    payload: updatedTask
                })
            })
            .catch(err => {
                throw new Error(JSON.stringify(err.message || err))
            })
    }
}

export function actionChangeFilter(filter: TodoFilter): any {
    return {
        type: FILTER_SET,
        payload: filter
    }
}