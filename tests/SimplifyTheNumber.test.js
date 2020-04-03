const simplify = require('../SimplifyTheNumber');
test('Answer',() => {
    expect(simplify(8964631)).toBe("8*1000000+9*100000+6*10000+4*1000+6*100+3*10+1");
    expect(simplify(660)).toBe("6*100+6*10");
    expect(simplify(56)).toBe("5*10+6");
})