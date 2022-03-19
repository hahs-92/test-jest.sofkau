const app = require("../app")


describe("SpyOn sugar", () => {
    test("doAdd", () => {
        // store the original implementation
        const original = app.doAdd
        // mock add with the original implementation
        app.doAdd = jest.fn(original)
        // spy the calls to add
        expect(app.doAdd(1,2)).toBe(3)
        expect(app.doAdd).toHaveBeenCalled()
        // override the implementation
        app.doAdd.mockImplementation(() => "mock")
        expect(app.doAdd(1,2)).toEqual("mock")
        // restore the original implementation
        app.doAdd = original
        expect(app.doAdd(1,2)).toBe(3)

    })
})

describe("SpyOn sugar Subtract", () => {
    test("doSubtract", () => {
        // store the original implementation
        const original = app.doSubtract
        // mock add with the original implementation
        app.doSubtract = jest.fn(original)
        // spy the calls to add
        expect(app.doSubtract(5,2)).toBe(3)
        expect(app.doSubtract).toHaveBeenCalled()
        // override the implementation
        app.doSubtract.mockImplementation(() => "mock")
        expect(app.doSubtract(5,2)).toEqual("mock")
        // restore the original implementation
        app.doSubtract = original
        expect(app.doSubtract(5,2)).toBe(3)

    })
})


describe("SpyOn sugar SubMultiply", () => {
    test("doMultiply", () => {
        // store the original implementation
        const original = app.doMultiply
        // mock add with the original implementation
        app.doMultiply = jest.fn(original)
        // spy the calls to add
        expect(app.doMultiply(5,2)).toBe(10)
        expect(app.doMultiply).toHaveBeenCalled()
        // override the implementation
        app.doMultiply.mockImplementation(() => "mock")
        expect(app.doMultiply(5,2)).toEqual("mock")
        // restore the original implementation
        app.doMultiply = original
        expect(app.doMultiply(5,2)).toBe(10)

    })
})

describe("SpyOn sugar SubDivide", () => {
    test("doDivide", () => {
        // store the original implementation
        const original = app.doDivide
        // mock add with the original implementation
        app.doDivide = jest.fn(original)
        // spy the calls to add
        expect(app.doDivide(12,2)).toBe(6)
        expect(app.doDivide).toHaveBeenCalled()
        // override the implementation
        app.doDivide.mockImplementation(() => "mock")
        expect(app.doDivide(12,2)).toEqual("mock")
        // restore the original implementation
        app.doDivide = original
        expect(app.doDivide(12,2)).toBe(6)

    })
})