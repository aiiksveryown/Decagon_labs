const evenlySpaced = require("./evenlySpacedSolution");


test('2, 4, 6 evenly spaced is true', () => {
    expect(evenlySpaced(2, 4, 6)).toEqual(true)
})

test('3, 6, 12 is not evenly spaced', () => {
    expect(evenlySpaced(3, 6, 12)).toEqual(false)
})

test('3, 6, 9 evenly spaced is true', () => {
    expect(evenlySpaced(3, 6, 9)).toEqual(true)
})

test('4, 12, 24 is not evenly spaced', () => {
    expect(evenlySpaced(4, 12, 24)).toEqual(false)
})


test('6, 2, 4 is not evenly spaced', () => {
    expect(evenlySpaced(6, 2, 4)).toEqual(true)
})
