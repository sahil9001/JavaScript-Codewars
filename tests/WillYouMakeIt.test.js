const zeroFuel = require('../WillYouMakeIt')

test('Test 1', () => {
  expect(zeroFuel(50, 25, 2)).toBe(true)
})

test('Test 2', () => {
  expect(zeroFuel(100, 50, 1)).toBe(false)
})