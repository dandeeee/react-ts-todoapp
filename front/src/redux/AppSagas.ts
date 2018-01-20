import {all, takeEvery, call, put} from "redux-saga/effects";
import API from "../API";
import {Action} from "redux-actions";
import {APP_ERR, TASKS_FETCH_ALL_SAGA, TASKS_SAVE_ONE_SAGA, TASKS_UPDATE_ONE_SAGA} from "./ActionTypes";
import {actionUpdateTask, actionAddTask, actionAppErr} from "./AppActions";

export function* rootSaga(): IterableIterator<any> {
    return yield all([
        tasksWatcherSaga()
    ])
}

function tasksWatcherSaga() {
    return all([
        takeEvery(TASKS_FETCH_ALL_SAGA, sagaFetchAllTasks),
        takeEvery(TASKS_SAVE_ONE_SAGA, sagaSaveOneTask),
        takeEvery(TASKS_UPDATE_ONE_SAGA, sagaUpdateOneTask),
        takeEvery(APP_ERR, appErr),
    ])
}

function* sagaFetchAllTasks(action: Action<any>) {
    const onSuccess = action.payload;

    try {
        const tasks = yield call(API.get, '/todos')
        onSuccess ? yield put(onSuccess(tasks)) : null
    } catch (err) {
        yield put(actionAppErr(JSON.stringify(err.message || err)))
    }
}

function* sagaSaveOneTask(action: Action<any>) {
    try {
        const persistedTask = yield call(API.put, '/todos', action.payload)
        yield put(actionAddTask(persistedTask))
    } catch (err) {
        yield put(actionAppErr(JSON.stringify(err.message || err)))
    }
}

function* sagaUpdateOneTask(action: Action<any>) {
    try {
        const task = action.payload
        const updatedTask = yield call(API.post, `/todos/${task.id}`, task)
        yield put(actionUpdateTask(updatedTask))
    } catch (err) {
        yield put(actionAppErr(JSON.stringify(err.message || err)))
    }
}

function appErr(action: Action<any>) {
    console.log(action.payload)
}