const{ add, subtract, multiply, divide } = require("../math")



//mocks
const doAdd = jest.fn((a,b) => add(a,b))
const doSubtract = jest.fn((a,b) => subtract(a,b))
const doMultiply = jest.fn((a,b) => multiply(a,b))
const doDivide = jest.fn((a,b) => divide(a,b))


describe("Mock doAdd", () => {
    test("called with(1,2)", () => {
        doAdd(1,2)
        expect(doAdd).toHaveBeenCalledWith(1,2)
    })

    test("tobe doAdd(1,2) = 3", () => {
        expect(doAdd(1,2)).toBe(3)
    })
})

describe("Mock doSubtract", () => {
    test("called with 8,3", () => {
        doSubtract(8,3)
        expect(doSubtract).toHaveBeenCalledWith(8,3)
    })

    test("To be doSubtract(8,3) = 5", () => {
        expect(doSubtract(8,3)).toBe(5)
    })
})

describe("Mock Multiply", () => {
    test("called with 6,3", () => {
        doMultiply(6,3)
        expect(doMultiply).toHaveBeenCalledWith(6,3)
    })

    test("To be doMultiply(6,3) = 18", () => {
        expect(doMultiply(6,3)).toBe(18)
    })
})

describe("Mock Divide", () => {
    test("called  with 12, 3", () => {
        doDivide(12,3)
        expect(doDivide).toHaveBeenCalledWith(12,3)
    })

    test("tobe doDivide(12,3) = 4", () => {
        expect(doDivide(12,3)).toBe(4)
    })
})