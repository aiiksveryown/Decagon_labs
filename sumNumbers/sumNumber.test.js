const sumNumbers = require('./sumNumber')


describe('TEST FOR SUM NUMBERS', () => {
  test('a simple case of only numbers', () => {
    expect(sumNumbers('45')).toBe(45);
  });
  test('a simple case of no value', () => {
    expect(sumNumbers('')).toBe(0);
  });
  test('a simple case of only strings', () => {
    expect(sumNumbers('dsafgsfgsfgs')).toBe(0);
  });
  test('a simple case of two numbers', () => {
    expect(sumNumbers('st54r1')).toBe(55);
  });
  test('a simple case of small values', () => {
    expect(sumNumbers('1weudh56jdnbfskjn788sdhkfbs90')).toBe(935);
  });
  test('a simple case of number length longer than 3', () => {
    expect(sumNumbers('4sjd33ksdf4433dfsdfk3323ksd32342ksdf234k23')).toBe(40392);
  });
  test('a case of special characters', () => {
    expect(sumNumbers('03;344;34k5k767k34j3jjj54j3j4j45j6jn2bm2,356b6')).toBe(1668);
  });
  test('another case of short values', () => {
    expect(sumNumbers('34kfk23kh5h4k5h3kh34h3kk4hkk43kkbb2,22')).toBe(182);
  });
  test('a case mixed values', () => {
    expect(sumNumbers('hsel32l4n34l545llnbj34j2v2.bv34b5n63m5m6m35m356m,3,63.65')).toBe(1288);
  });
  test('another case of mixed values', () => {
    expect(sumNumbers('12n2lb53m342m2,b2.34n5,nw,wrnw,we.we3234sksmsde')).toBe(3686);
  });
});








