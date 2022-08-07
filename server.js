const Calculator = require('./calculator.js');
const {operatorsMap} = require('./operations.js');

const express = require('express');
const app = express();

app.set('view-engine', 'ejs')
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.post('/calculate', (req,res) => {
    const {firstNum, secondNum, operator} = getParameters(req);
    const calculator = new Calculator()
    const mathAction = operatorsMap[operator]
    let result = calculator.calculate(mathAction, firstNum, secondNum)
    res.send({result})
})

const getParameters = (req) => {
    let firstNum = parseFloat(req.body.firstNum);
    let secondNum = parseFloat(req.body.secondNum);
    let operator = req.body.operator;
    return {firstNum, secondNum, operator}
}

app.listen(3001)
