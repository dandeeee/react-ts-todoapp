import {Task} from "../model/Task";
import {
    FILTER_SET, TASKS_SET_ALL, TASKS_UPDATE_ONE_SAGA, TASKS_FETCH_ALL_SAGA,
    TASKS_SAVE_ONE_SAGA, TASKS_UPDATE_ONE, TASKS_ADD_ONE, APP_ERR
} from "./ActionTypes";
import {TodoFilter} from "../model/TodoList";
import {Action} from "redux-actions";

export function actionFetchAllTasks(onSuccessAction?: (payload: any) => Action<any>): any {
    return {
        type: TASKS_FETCH_ALL_SAGA,
        payload: onSuccessAction
    }
}

export function actionSaveTask(task: Task): any {
    return {
        type: TASKS_SAVE_ONE_SAGA,
        payload: task
    }
}

export function actionToggleTask(task: Task): any {
    task.isCompleted = !task.isCompleted
    return {
        type: TASKS_UPDATE_ONE_SAGA,
        payload: task
    }
}

export function actionSetTasks(tasks: Array<Task>): any {
    return {
        type: TASKS_SET_ALL,
        payload: tasks
    }
}

export function actionUpdateTask(task: Array<Task>): any {
    return {
        type: TASKS_UPDATE_ONE,
        payload: task
    }
}

export function actionAddTask(task: Array<Task>): any {
    return {
        type: TASKS_ADD_ONE,
        payload: task
    }
}


export function actionAppErr(err: string): any {
    return {
        type: APP_ERR,
        payload: err
    }
}
export function actionChangeFilter(filter: TodoFilter): any {
    return {
        type: FILTER_SET,
        payload: filter
    }
}