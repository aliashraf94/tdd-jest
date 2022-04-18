const { test, expect } = require("@jest/globals")
const subtract = require("./subttract")

test("Properly subtract two number", ( ) => {
    expect(subtract(1,2)).toBe(-1)
})