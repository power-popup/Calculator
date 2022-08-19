const { operatorsMap } = require('./maps/operations.js');
const { colorsMap } = require('./maps/colors.js');
const Result = require('./result')

const express = require('express');
const app = express();

app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.post('/calculate', (req, res) => {
    const { firstNum, secondNum, operator } = getParameters(req);
    const mathAction = operatorsMap[operator]
    let result = new Result()
    result.setNumber(mathAction.calculate(firstNum, secondNum))
    result.setColor(colorsMap[(getReminder(result.getNumber()))])
    res.send({ 'number': result.getNumber(), 'color': result.getColor() })
})

const getReminder = (number) => {
    return number % 2;
}

const getParameters = (req) => {
    let firstNum = parseFloat(req.body.firstNum);
    let secondNum = parseFloat(req.body.secondNum);
    let operator = req.body.operator;
    return { firstNum, secondNum, operator }
}

app.listen(3001)
