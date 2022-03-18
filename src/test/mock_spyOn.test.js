const app = require("../app")



describe("Mock add with spyOn", () => {
    test("calls add", () => {
        const spy = jest.spyOn(app, 'doAdd')
        const result = app.doAdd(1,2)


        expect(app.doAdd(1,2)).toEqual(3)
        expect(result).toBe(3)
        expect(spy).toHaveBeenCalled()
        expect(spy).toHaveBeenCalledWith(1,2)
    })
})

describe("Mock subtract with spyOn", () => {
    test("calls subtract", () => {
        const spy = jest.spyOn(app, 'doSubtract')
        const result = app.doSubtract(12,2)

        expect(app.doSubtract(12,2)).toEqual(10)
        expect(result).toBe(10)
        expect(spy).toHaveBeenCalled()
        expect(spy).toHaveBeenCalledWith(12,2)
    })
})

describe("Mock multiply with spyOn", () => {
    test("calls multiply", () => {
        const spy = jest.spyOn(app, 'doMultiply')
        const result = app.doMultiply(12,2)

        expect(app.doMultiply(12,2)).toEqual(24)
        expect(result).toBe(24)
        expect(spy).toHaveBeenCalled()
        expect(spy).toHaveBeenCalledWith(12,2)
    })
})

describe("Mock divide with spyOn", () => {
    test("calls divide", () => {
        const spy = jest.spyOn(app, 'doDivide')
        const result = app.doDivide(12,2)

        expect(app.doDivide(12,2)).toEqual(6)
        expect(result).toBe(6)
        expect(spy).toHaveBeenCalled()
        expect(spy).toHaveBeenCalledWith(12,2)
    })
})