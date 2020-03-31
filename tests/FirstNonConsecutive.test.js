const firstNonConsecutive = require('../FirstNonConsecutive');
test('Answer',() => {
    const first = firstNonConsecutive([1,2,3,4,5,6,7,8])
    expect(firstNonConsecutive([1,2,3,4,5,6,7,8])).toBe(first);
})