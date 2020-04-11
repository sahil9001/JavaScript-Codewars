const findMiddle = require('../MiddleOfProduct');
test('Answer',() => {
    expect(findMiddle('s7d8jd9')).toBe(0);
    expect(findMiddle('58jd9fgh/fgh6s.,sdf')).toBe(16);
})