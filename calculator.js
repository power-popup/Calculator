class Calculator {

    constructor (firstNum, secondNum, operator){
        this.firstNum = firstNum;
        this.secondNum = secondNum;
        this.operator =     operator;
    }

    calculate() {
       return this.operator(this.firstNum, this.secondNum);
    }
}

    module.exports = Calculator;