export class Task {
    title: string
    isCompleted: boolean = false

    constructor(taskName: string) {
        this.title = taskName
    }

}