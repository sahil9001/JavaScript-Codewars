const pattern = require('../CompleteThePattern2');
test('Answer',() => {
    expect(pattern(1)).toBe('1');
    expect(pattern(2)).toBe('21\n2');
    expect(pattern(5)).toBe('54321\n5432\n543\n54\n5');
});
   