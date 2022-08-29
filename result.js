class Result {
    number = null
    color = null

    // If i have to generate number of results, should i create instance every time ?
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
