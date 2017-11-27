export class Task {
    todo: string
    isCompleted: boolean = false

    constructor(taskName: string) {
        this.todo = taskName
    }

}