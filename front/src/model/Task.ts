export class Task {
    id: number
    title: string
    isCompleted: boolean = false

    constructor(taskName: string) {
        this.id = Math.floor(10000 * Math.random())
        this.title = taskName
    }

}