const { test, expect } = require("@jest/globals")
const Cat = require("./feedTheCat")

test("Food should go the food bag", ()=>{
    const name = "Loki"     // Arrange
    const color = "Brown"   // Arrange
    const foodBag = ["Milk", "Chicken"] // Arrange

    const cat = new Cat(name, color, foodBag)   //  Act
    const addFood = cat.addFood("Fish")     //  Act

    // toBe will give error here because every array have a diffrent memory refrence
    expect(cat.foodBag).toEqual([ "Milk", "Chicken", "Fish"])   // Assert

    // Thanks for feeding my cat
})