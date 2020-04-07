const convertMyDollars = require('../CurrencyConversion')
test('Answer',() => {
    expect(convertMyDollars(7, "Armenian Dram")).toBe("You now have 3346 of Armenian Dram.");
    expect(convertMyDollars(322, "Armenian Dram")).toBe("You now have 153916 of Armenian Dram.");
    expect(convertMyDollars(25, "Bangladeshi Taka")).toBe("You now have 2050 of Bangladeshi Taka.");
    expect(convertMyDollars(730, "Bangladeshi Taka")).toBe("You now have 59860 of Bangladeshi Taka.");
    expect(convertMyDollars(37, "Croatian Kuna")).toBe("You now have 222 of Croatian Kuna.");
})