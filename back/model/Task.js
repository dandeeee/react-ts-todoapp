let ID = 0

class Task {
    constructor(taskName) {
        this.id = ID++
        this.title = taskName
        this.isCompleted = false
    }
}

module.exports = Task