const {add, subtract, divide, multiply } = require("../math")


describe("Testing Add", () => {
    test('1 + 2 to equal 3', () => {
        expect(add(1, 2)).toBe(3)
    })

    test('0 + 5 to equal 5', () => {
        expect(add(0, 5)).toBe(5)
    })
})

describe("Testing Subtract", () => {
    test('5 - 2 to equal 3', () => {
        expect(subtract(5, 2)).toBe(3)
    })

    test('10 + 5 to equal 5', () => {
        expect(subtract(10, 5)).toBe(5)
    })
})


describe("Testing Multiply", () => {
    test('5 * 2 to equal 10', () => {
        expect(multiply(5, 2)).toBe(10)
    })

    test('10 * 5 to equal 50', () => {
        expect(multiply(10,5)).toBe(50)
    })
})


describe("Testing Divide", () => {
    test('12 / 2 to equal 6', () => {
        expect(divide(12, 2)).toBe(6)
    })

    test('10 / 5 to equal 2', () => {
        expect(divide(10,5)).toBe(2)
    })
})


