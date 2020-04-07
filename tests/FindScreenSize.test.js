const findScreenHeight = require('../FindScreenSize');
test('Answer',() => {
    expect(findScreenHeight(1024,"4:3")).toBe("1024x768");
    expect(findScreenHeight(1280,"16:9")).toBe("1280x720");
    expect(findScreenHeight(3840,"32:9")).toBe("3840x1080");
})