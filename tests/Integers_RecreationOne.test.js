const listSquared = require('../Integers_RecreationOne');
test('Answer',() => {
    expect(listSquared(1,250)).toMatchObject([[1, 1], [42, 2500], [246, 84100]]);
    expect(listSquared(42, 250)).toMatchObject([[42, 2500], [246, 84100]]);
    expect(listSquared(250, 500)).toMatchObject([[287, 84100]]);
})