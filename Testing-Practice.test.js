const {
  sum,
  capitalize
} = require('./Testing-Practice');

//Sum tests
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
test('adds -1 + 2 to equal 1', () => {
  expect(sum(-1, 2)).toBe(1);
});
test('adds 0 + 2 to equal 2', () => {
  expect(sum(0, 2)).toBe(2);
});
test('adds 0 + -2 to equal -2', () => {
  expect(sum(0, -2)).toBe(-2);
});

//Capitalize First Character

test('Capitalize: Normal string', () => {
  expect(capitalize('hello world')).toBe('Hello world')
});
test('Capitalize: Already Capitalize')

