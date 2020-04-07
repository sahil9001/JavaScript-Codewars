const save = require('../FillTheHardDiskDrive');
test('Answer',() => {
    expect(save([4, 4, 4, 3, 3], 12)).toBe(3);
    expect(save([4, 4, 4, 3, 3], 11)).toBe(2);
    expect(save([4, 8, 15, 16, 23, 42], 108)).toBe(6);
    expect(save([13], 13)).toBe(1);
    expect(save([1,2,3,4], 250)).toBe(4);
    expect(save([100], 500)).toBe(1);
    expect(save([11,13,15,17,19], 8)).toBe(0);
    expect(save([45], 12)).toBe(0);
});
   