class Result {
    #number = undefined
    #color = undefined

    setNumber(number) {
        this.#number = number;
    }

    setColor(color) {
        this.#color = color;
    }

    getNumber() {
        return this.#number;
    }

    getColor() {
        return this.#color;
    }

}

module.exports = Result