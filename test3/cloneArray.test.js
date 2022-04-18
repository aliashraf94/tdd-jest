const { test, expect } = require("@jest/globals")
const cloneArray = require("./clonaArray")

test("properly clone an array", () => {
    const array = [1,2,3]
    expect(cloneArray(array)).toEqual(array)
})