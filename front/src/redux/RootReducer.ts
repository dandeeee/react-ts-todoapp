import { combineReducers } from 'redux'
import { Reducer } from 'redux'
import {AppState, getInitialState} from "./AppState";
import {Action, handleActions, ReducerMap} from "redux-actions";
import {Task} from "../model/Task";
import {TodoFilter} from "../model/TodoList";
import {FILTER_SET, TASKS_ADD_ONE, TASKS_SET_ALL, TASKS_UPDATE_ONE} from "./ActionTypes";

// TasksReducer
type TasksActionState = Task[]
type TasksActionData = Task
const initialTasksState = getInitialState().tasks
const TasksReducer = handleActions<TasksActionState, TasksActionData>({
    [TASKS_ADD_ONE]: (currentState: TasksActionState, action: Action<TasksActionData>): TasksActionState => {
        let nextState = currentState

        if (action.payload) {
            nextState = [...currentState, action.payload]
        }

        return nextState
    },

    [TASKS_SET_ALL]: (currentState: TasksActionState, action: Action<TasksActionData[]>): TasksActionState => {
        return [...action.payload || []]
    },

    [TASKS_UPDATE_ONE]: (currentState: TasksActionState, action: Action<TasksActionData>): TasksActionState => {
        let nextState = currentState

        if (action.payload) {
            const task = action.payload
            const taskPosition = currentState.findIndex(t => t.id == task.id)
            nextState = currentState.map((t, i) => i === taskPosition ? task : t)
        }

        return nextState
    }
} as ReducerMap<TasksActionState, TasksActionData>, initialTasksState)



// FiltersReducer
type FilterActionState = TodoFilter
type FilterActionData = TodoFilter
const initialFilterState = getInitialState().filter
const FiltersReducer = handleActions<FilterActionState, FilterActionData>({
    [FILTER_SET]: (currentState: FilterActionState, action: Action<TodoFilter>): FilterActionState => {
        return action.payload || initialFilterState
    },
} as ReducerMap<FilterActionState, FilterActionData>, initialFilterState)

// RootReducer
const rootReducer: Reducer<AppState> = combineReducers({
    tasks: TasksReducer,
    filter: FiltersReducer
})

export default rootReducer

