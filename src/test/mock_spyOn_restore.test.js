const app = require("../app")

describe("SpyOn restore doApp", () => {
    test("calls doAdd", () => {
        const spy = jest.spyOn(app, "doAdd")

        spy.mockImplementation(() => "spyOn")
        expect(app.doAdd(1,2)).toEqual("spyOn")

        spy.mockRestore()
        expect(app.doAdd(1,2)).toEqual(3)
    })
})

describe("SpyOn restore doSubtract", () => {
    test("calls doSubtract", () => {
        const spy = jest.spyOn(app, "doSubtract")

        spy.mockImplementation(() => "spyOn")
        expect(app.doSubtract(12,2)).toEqual("spyOn")

        spy.mockRestore()
        expect(app.doSubtract(12,2)).toEqual(10)
    })
})

describe("SpyOn restore doMultiply", () => {
    test("calls doMultiply", () => {
        const spy = jest.spyOn(app, "doMultiply")

        spy.mockImplementation(() => "spyOn")
        expect(app.doMultiply(12,2)).toEqual("spyOn")

        spy.mockRestore()
        expect(app.doMultiply(12,2)).toEqual(24)
    })
})

describe("SpyOn restore doDivide", () => {
    test("calls doDivide", () => {
        const spy = jest.spyOn(app, "doDivide")

        spy.mockImplementation(() => "spyOn")
        expect(app.doDivide(12,2)).toEqual("spyOn")

        spy.mockRestore()
        expect(app.doDivide(12,2)).toEqual(6)
    })
})