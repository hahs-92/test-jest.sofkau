const { add, subtract, multiply, divide } = require("../math")

const doAdd      = jest.fn((a, b) => add(a,b))
const doSubtract = jest.fn((a, b) => subtract(a,b))
const doMultiply = jest.fn((a, b) => multiply(a,b))
const doDivide   = jest.fn((a, b) => divide(a,b))


module.exports = {
    doAdd,
    doSubtract,
    doMultiply,
    doDivide
}
