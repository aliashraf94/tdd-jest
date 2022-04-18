const { test, expect } = require("@jest/globals")
const Person = require("./person")

test("We should recieve greeting", ()=>{
    const name = "Yogi";     // Arrange
    const city = "Delhi";    // Arrange  
    const person = new Person(name,city);    // Act
    const greeting = person.greeting();    // Act

    expect(greeting).toBe("Hi my name is Yogi and i am from Delhi.");    // Assert
});