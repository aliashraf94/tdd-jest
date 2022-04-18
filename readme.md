Install Jest using yarn:

yarn add --dev jest

Or npm:

npm install --save-dev jest

Note: Jest documentation uses yarn commands, but npm will also work. You can compare yarn and npm commands in the yarn docs, here.

Let's get started by writing a test for a hypothetical function that adds two numbers. First, create a sum.js file:
```
function sum(a, b) {
  return a + b;
}
module.exports = sum;
```
Then, create a file named sum.test.js. This will contain our actual test:
```
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```
Add the following section to your package.json:
```
{
  "scripts": {
    "test": "jest"
  }
}
```
Finally, run yarn test or npm run test and Jest will print this message:
```
PASS  ./sum.test.js
✓ adds 1 + 2 to equal 3 (5ms)
```
You just successfully wrote your first test using Jest!

This test used expect and toBe to test that two values were exactly identical.

Unit Testing and the Arrange, Act and Assert (AAA) Pattern

The AAA (Arrange-Act-Assert) pattern has become almost a standard across the industry. It suggests that you should divide your test method into three sections: arrange, act and assert. Each one of them only responsible for the part in which they are named after.

Arrange - The arrange section you only have code required to setup that specific test Here objects would be created, mocks setup (if you are using one) and potentially expectations would be set.

Act - Then there is the Act, which should be the invocation of the method being tested.

Assert - And on Assert you would simply check whether the expectations were met.

```
const multiply = require('./multiply');

test("Two number should multiply", () => {
    const number1 = 33; // Arrange
    const number2 = 3;  // Arrange
    const result = multiply(number1, number2);   // Act
    expect(result).toBe(99) // Assert
});

```