const encoderSolution = require('./encoderSolution');

test('the function for a simple one-to-one case', () => {
  expect(encoderSolution(['a', 'b', 'c', 'd'], ['1', '2', '3', '4'])).toEqual(['1', '2', '3', '4']);
});

test('for a repititive case in `raw` parameter and limited elements in `code_words`', () => {
  expect(encoderSolution(['a', 'b', 'a', 'b', 'a', 'b', 'a', 'b'], ['1', '2'])).toEqual(['1', '2', '1', '2', '1', '2']);
});

test('for a repititive case in `raw` parameter and limited elements in `code_words`', () => {
  expect(encoderSolution(['a', 'a', 'a', 'a', 'a', 'a'], ['23', '12', '10']))
    .toEqual(['23', '23', '23', '23', '23', '23']);
});

test('When there are no elements in the `word` parameter', () => {
  expect(encoderSolution([], ['23', '12', '10']))
    .toEqual([]);
});

test('for a case of elements in `words` re-occurring', () => {
  expect(encoderSolution(['a', 'b', 'c', 'd', 'c', 'b', 'a', 'd'], ['9', '17', '12', '15', '21', '10']))
    .toEqual(['9', '17', '12', '15', '12', '17', '9', '15']);
});

test('for the correct output of the function', () => {
  expect(encoderSolution(['a', 'b', 'b', 'b', 'b', 'b', 'b'], ['50', '44', '21', '51', '12', '01']))
    .toEqual(['50', '44', '44', '44', '44', '44', '44']);
});

