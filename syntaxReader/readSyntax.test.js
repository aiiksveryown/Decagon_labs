const readSyntax = require('./readSyntax');

describe('TEST FOR READSYNTAX', () => {
  test('in a simple case of no brace', () => {
    expect(readSyntax('')).toBe('ok')
  });
  test('in a simple case of error on last position', () => {
    expect(readSyntax('<>}')).toBe(2)
  });
  test('in a simple case of error on last position', () => {
    expect(readSyntax('[[<]')).toBe(3)
  });
  test('in a simple case of complete brace', () => {
    expect(readSyntax('[[[[]]<>{}]]')).toBe('ok')
  });
  test('in a case of medium T length and early error', () => {
    let date = new Date();
    expect(readSyntax('{[[[[]<>]]]{}<><>[[[[[[]]]]]]{<>>[]}}'.repeat(200000))).toBe(32)
    expect(new Date() - date).toBeLessThan(30)
  });
  test('in a large case of very early error', () => {
    let date = new Date();
    expect(readSyntax('>' + '{[[[[]<>]]]{}<><>[[[[[[]]]]]]{<>[]}}'.repeat(1000000))).toBe(0)
    expect(new Date() - date).toBeLessThan(25)
  });
  test('in a simple case of one brace', () => {
    expect(readSyntax('{')).toBe(0)
  });
  test('in a simple case of only open braces', () => {
    expect(readSyntax('{<[(')).toBe(0)
  });
  test('in a case of large value where error is at last position', () => {
    let date = new Date();
    expect(readSyntax('{[[[[]<>]]]{}<><>[[[[[[]]]]]]{<>[]}}'.repeat(1000000) + '>')).toBe(36000000)
    expect(new Date() - date).toBeLessThan(1700)
  });  
  test('in a case of error within the braces', () => {
    let date = new Date();
    expect(readSyntax('[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}>}}}}}}}]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]')).toBe(110)
    expect(new Date() - date).toBeLessThan(7)
  });
  test('in a case of medium values with no error brace', () => {
    let date = new Date();
    expect(readSyntax(`[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]][[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]{{{{{{{<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]][[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]][[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]][[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]{{{{{{{<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]][[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]`)).toBe('ok')
    expect(new Date() - date).toBeLessThan(5)
  });
  test('in a case of large values and error brace at the end', () => {
    let date = new Date();
    expect(readSyntax(('[[[[[[[[[[[[[[]]]]]]]]<<<<<<<<<<<>>>>>>>>>>>]]]]]]'.repeat(5)  + '[[[[[[[[[[[[[[]]]]]]]]<<<<<<<<<<<>>>>>>>>>>>]]]]]]'.repeat(5)).repeat(200000) + '<')).toBe(100000000)
    expect(new Date() - date).toBeLessThan(4200)
  });
  test('in a case of large values and error brace at early position', () => {
    let date = new Date();
    expect(readSyntax(('[[[[[[[[[[[[[[]]]]]]]]<<<<<<<<<>>>>>>>>>>]]]]]]'.repeat(5)  + '[[[[[[[[[[[[[[]]]]]]]]<<<<<<<<<<<>>>>>>>>>>>]]]]]]'.repeat(5)).repeat(200000))).toBe(40)
    expect(new Date() - date).toBeLessThan(200)
  });
});
