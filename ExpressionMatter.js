function expressionMatter(a, b, c) {
    return Math.max(a + b + c, a * b * c, (a + b) * c, a * (b + c))
  // highest achievable result
  }
  module.exports = expressionMatter;