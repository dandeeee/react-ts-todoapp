class Task {
    constructor(taskName) {
        this.id = Math.floor(10000 * Math.random())
        this.title = taskName
        this.isCompleted = false
    }
}

module.exports = Task