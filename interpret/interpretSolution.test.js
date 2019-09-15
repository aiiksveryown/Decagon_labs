const interpret = require('./interpretSolution');

test('for the correctness of the (*) operator', () => {
  expect(interpret(10, ['*'], [10])).toBe(100);
});

test('for the correctness of the (+) operator', () => {
  expect(interpret(120, ['+'], [50])).toBe(170);
});

test('for the correctness of the (+) operator', () => {
  expect(interpret(99, ['-'], [55])).toBe(44);
});

test('for the correctness of the (+ and -) combined operators where + is first', () => {
  expect(interpret(2, ['+', '-'], [4, 6])).toBe(0);
});

test('for the correctness of the (+ and -) combined operators where - is first', () => {
  expect(interpret(2, ['-', '+'], [4, 6])).toBe(4);
});

test('for the correctness of the (+ and *) combined operators where + is first', () => {
  expect(interpret(3, ['+', '*'], [5, 2])).toBe(16);
});

test('for the correctness of the (+ and *) combined operators where * is first', () => {
  expect(interpret(3, ['*', '+'], [5, 2])).toBe(17);
});

test('for the correctness of the (- and *) combined operators where - is first', () => {
  expect(interpret(10, ['-', '*'], [5, 3])).toBe(15);
});

test('for the correctness of the (- and *) combined operators where * is first', () => {
  expect(interpret(3, ['*', '-'], [5, 10])).toBe(5);
});

test('for the correctness of all operator combined where - is first, * is second and + is third', () => {
  expect(interpret(10, ['-', '*', '+'], [5, 3, 2])).toBe(17);
});

test('for the correctness of all operator combined where - is first, + is second and * is third', () => {
  expect(interpret(10, ['-', '+', '*'], [5, 3, 2])).toBe(16);
});

test('for the correctness of all operator combined where + is first, * is second and - is third', () => {
  expect(interpret(10, ['+', '*', '-'], [5, 3, 2])).toBe(43);
});

test('for the correctness of all operator combined where + is first, - is second and * is third', () => {
  expect(interpret(10, ['+', '-', '*'], [5, 3, 2])).toBe(24);
});

test('for the correctness of all operator combined where * is first, + is second and - is third', () => {
  expect(interpret(10, ['*', '+', '-'], [5, 3, 2])).toBe(51);
});

test('for the correctness of all operator combined where * is first, - is second and + is third', () => {
  expect(interpret(10, ['*', '-', '+'], [5, 3, 2])).toBe(49);
});

test('for the correctness of all operator combined where there is an unidentified operator', () => {
  expect(interpret(10, ['*', '$', '+'], [5, 3, 2])).toBe(-1);
});

test('for a simple case of unidentified operator', () => {
  expect(interpret(10, ['$'], [2])).toBe(-1);
});

test('for the correctness when there is an unidentified operator', () => {
  expect(interpret(3, ['*', '$'], [5, 10])).toBe(-1);
});