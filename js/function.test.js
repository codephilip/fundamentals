const myFunction = require('./add');

test('adds 1+2 to equal3', () => {
  expect(myFunction(1,2)).toBe(3);
});

