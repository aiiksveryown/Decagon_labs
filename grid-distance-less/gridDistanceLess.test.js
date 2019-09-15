const gridDistance = require('./grid-distance');

describe('TEST FOR GRID DISTANCE', () => {
  test(`a case where ['2km-west', '4km-south', '0km-north', '12km-east'] returns 14km`, () => {
    expect(gridDistance(['2km-west', '4km-south', '0km-north', '12km-east'])).toBe('14km');
  });
  test(`a case where ['1km-west', '1km-east', '1km-north', '1km-south'] returns 0km`, () => {
    expect(gridDistance(['1km-west', '1km-east', '1km-north', '1km-south'])).toBe('0km');
  });
  test(`a case where ['300km-south', '50km-south', '70km-north', '160km-east', '79km-south', '50km-east'] returns 569km`, () => {
    expect(gridDistance(['300km-south', '50km-south', '70km-north', '160km-east', '79km-south', '50km-east'])).toBe('569km')
  });
  test(`a simple case where no value is given`, () => {
    expect(gridDistance([])).toBe('0km');
  });
  test(`a simple case where only one value is given`, () => {
    expect(gridDistance(['50km-south'])).toBe('50km');
  });
});
