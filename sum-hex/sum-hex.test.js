const highestSum = require('./sum-hex');

describe('TEST FOR SUM-HEX', () => {
  test(`should return 26 in a case of highestSum('12F7A9348', 3)`, () => {
    expect(highestSum('12F7A9348', 3)).toBe(26);
  })
  test(`should return 25 in a case of highestSum('453DAF12F', 2)`, () => {
    expect(highestSum('453DAF12F', 2)).toBe(25);
  })
  test(`should return 7 in a case of highestSum('1231ADE', 4)`, () => {
    expect(highestSum('1231ADE', 4)).toBe(7);
  })
  test(`should return 0 in a case of highestSum('ADE', 4)`, () => {
    expect(highestSum('ADE', 4)).toBe(0);
  })
});