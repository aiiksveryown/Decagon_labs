const highestNumPosition = require('./highestNumPosition')
describe('TEST FOR FIND-POSITION', () => {
  test(`should return [1,2] in a case of highestNum([[66, 3, 9], [ 1, 8, 98], [7, 9, 7]])`, () => {
    expect(highestNumPosition([[66, 3, 9], [ 1, 8, 98], [7, 9, 7]])).toEqual([1, 2]);
  });
  test(`should return [2,2] in a case of highestNumPosition([[3,5,2],[55,6,22],[54,64,110]])`, () => {
    expect(highestNumPosition([[3,5,2],[55,6,22],[54,64,110]])).toEqual([2, 2]);
  });
  test(`should return [0,0] in a case of highestNumPosition([[0,0,0],[0,0,0],[0,0,0]])`, () => {
    expect(highestNumPosition([[0,0,0],[0,0,0],[0,0,0]])).toEqual([0, 0]);
  });
  test(`should return [0,2] in a case of highestNumPosition([[-3,-12,0],[-1,-8,0],[-12,-6,0]])`, () => {
    expect(highestNumPosition([[-3,-12,0],[-1,-8,0],[-12,-6,0]])).toEqual([0, 2]);
  });
  test(`should return [0,0] in a case of empty array`, () => {
    expect(highestNumPosition([])).toEqual([0, 0]);
  });
});