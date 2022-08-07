const Sum = require('./operators/sum')
const Sub = require('./operators/sub')
const Mult = require('./operators/mult')
const Div = require('./operators/div')

const operatorsMap = {
    '+': new Sum(),
    '-': new Sub(),
    '*': new Mult(),
    '/': new Div()
}

module.exports = {operatorsMap}
