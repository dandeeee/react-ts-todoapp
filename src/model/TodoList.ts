import { Task } from './Task'

export class TodoList {
    tasks: Array<Task> = []
}

export function getStubTaskList() {
    return [
        new Task('Buy cow'),
        new Task('Get milk'),
        new Task('Learn React')
    ]
}