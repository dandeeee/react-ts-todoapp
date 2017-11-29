export class Task {
    id?: number
    title: string
    isCompleted: boolean = false

    constructor(taskName: string) {
        this.title = taskName
    }

}