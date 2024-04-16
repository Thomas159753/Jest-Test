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
  expect(calculator.add(0.857, 1)).toBe(1.86);
});
//subtract
test('subtract 2 - 1 to equal 1', () => {
  expect(calculator.subtract(2, 1)).toBe(1);
});
test('subtract 1 - 2 to equal -1', () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});
test('subtract -2.0001 -1 to equal -3.01', () => {
  expect(calculator.subtract(-2.0056, -1)).toBe(-3.01);
});
//divide
test('Divide 6 / 2 to equal 3', () => {
  expect(calculator.divide(6,2)).toBe(3);
});
test('Divide 5 / 2 to equal 2.5', () => {
  expect(calculator.divide(5,2)).toBe(2.5);
});
test('Divide 10 / -3 to equal -3.33', () => {
  expect(calculator.divide(10,-3)).toBe(-3.33);
});

test('Multiply 2 * 4 to equal 8', () => {
  expect(calculator.multiply(2,4)).toBe(8);
});
test('Multiply 2 * -3.089 to equal -6.18', () => {
  expect(calculator.multiply(2,-3.089)).toBe(-6.18);
});

//caesarCipher
test('caesarCipher shifts by 3', () => {
  expect(caesarCipher("ABC", 3)).toBe("DEF");
});
test('caesarCipher counts ', () => {
  expect(caesarCipher("AB C", 3)).toBe("DE F");
});
test('caesarCipher loops after z to the beginning ', () => {
  expect(caesarCipher("AB z", 3)).toBe("DE C");
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

