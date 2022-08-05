//import Calculator from './calculator.js';
const Calculator = require('./calculator.js');

const express = require('express');
const app = express();

app.set('view-engine', 'ejs')
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.post('/calculate', (req,res) => {
    let firstNum = parseFloat(req.body.firstNum);
    let secondNum = parseFloat(req.body.secondNum);
    let operator = req.body.operator;
    const calculator = new Calculator(firstNum, secondNum, map[operator])
    let result = calculator.calculate();
    res.send({result})
})

const map = {
    '+': add,
    '-': sub,
    '*': mult,
    '/': div
}

function add(firstNum, secondNum) {
    return firstNum + secondNum
}
function sub(firstNum, secondNum) {
    return firstNum - secondNum
}
function mult(firstNum, secondNum) {
    return firstNum * secondNum
}
function div(firstNum, secondNum) {
    return firstNum / secondNum
}

app.listen(3000)