class Result {
    number = null
    color = null

    constructor(number, color) {
        this.number = number
        this.color = color
    }

    getParameters() {
        return {
            number: this.number,
            color: this.color
        }
    }
}

module.exports = Result