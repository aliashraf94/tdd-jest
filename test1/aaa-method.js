// The AAA (Arrange-Act-Assert)
// Arrange - The arrange section you only have code required to setup that specific test.
// Here objects would be created, mocks setup (if you are using one) and potentially expectations would be set.
// Act - Then there is the Act, which should be the invocation of the method being tested.
// Assert - And on Assert you would simply check whether the expectations were met.

const aaaMultiply = (a,b) => {
    return a * b;
};

module.exports = aaaMultiply