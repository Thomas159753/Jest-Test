const {
  capitalize,
  reverseString,
  calculator
} = require('./Testing-Practice');

////Calculator tests
test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});
test('adds 0 + 2 to equal 2', () => {
  expect(calculator.add(0, 2)).toBe(2);
});
test('adds 0 + -2 to equal -2', () => {
  expect(calculator.add(0, -2)).toBe(-2);
});
test('adds 0.0001 + 1 to equal 1.01', () => {
  expect(calculator.add(0.001, 1)).toBe(1.01);
});

test('subtract 2 - 1 to equal 1', () => {
  expect(calculator.subtract(2, 1)).toBe(1);
});
test('subtract 1 - 2 to equal -1', () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});
test('subtract -2.0001 - 1 to equal -', () => {
  expect(calculator.subtract(-2, -1)).toBe(-3);
});

//Capitalize First Character

test('Capitalize: Normal string', () => {
  expect(capitalize('hello world')).toBe('Hello world');
});
test('Capitalize: Already Capitalize', () => {
  expect(capitalize('Hello world')).toBe('Hello world');
});

//Reverse String Test

test('ReverseString single word: Hello to be olleH', () =>{
  expect(reverseString('Hello')).toBe('olleH');
});
test('ReverseString multiple words: Hello world to be dlrow olleH', () =>{
  expect(reverseString('Hello world')).toBe('dlrow olleH');
});

