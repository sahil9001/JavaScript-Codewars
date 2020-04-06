const area = require('../FindTheAreaOfRectangle');
test('Answer',() => {
    expect(area(5,4)).toBe(12);
    expect(area(10,6)).toBe(48);
    expect(area(13,5)).toBe(60);
    expect(area(12,5)).toBe(54.54);
})