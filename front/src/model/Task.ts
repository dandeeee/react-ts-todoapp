const uuid = require("uuid");

export class Task {
    id?: string
    title: string
    isCompleted: boolean = false

    constructor(taskName: string) {
        this.id = uuid()
        this.title = taskName
    }

}