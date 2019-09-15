let mathEncrypt = require('./mathEncrypt.js');

test('simple case where a + b - c to expect ab+c-', () => {
	expect(mathEncrypt('a + b - c')).toBe('ab+c-');
});

test('another case where a * b + C to expect ab*c+', () => {
	expect(mathEncrypt('a * b + c')).toBe('ab*c+');
});

test('another case where a * ( b + C ) to expect abc+*', () => {
	expect(mathEncrypt('a * ( b + c )')).toBe('abc+*');
});

test('another case where 1 * ( 5 + 6 - 4 ) * 7 to expect 156+4-*7*', () => {
	expect(mathEncrypt('1 * ( 5 + 6 - 4 ) * 7')).toBe('156+4-*7*');
});

test('another case where 1 + ( 5 - 4 ) + 7 * 6 to expect 154-+76*+', () => {
	expect(mathEncrypt('1 + ( 5 - 4 ) + 7 * 6')).toBe('154-+76*+');
});

test('another case where a * d / f to expect ad*f/', () => {
	expect(mathEncrypt('a * d / f')).toBe("ad*f/");
});

test('another case where "(b - c)" to expect bc-', () => {
	expect(mathEncrypt('( b - c )')).toBe("bc-");
});

test('another case where 5 * ( 6 + 7 * 2 ) to expect 5672*+*', () => {
	expect(mathEncrypt('5 * ( 6 + 7 * 2 )')).toBe("5672*+*");
});