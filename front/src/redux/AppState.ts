import {Task} from "../model/Task";
import {TodoFilter} from "../model/TodoList";

export interface AppState {
    tasks: Array<Task>
    filter: TodoFilter
}

const tasks: Array<Task> = []
const filter: TodoFilter = TodoFilter.ALL

export const getInitialState = (): AppState => {
    return {tasks, filter}
}
