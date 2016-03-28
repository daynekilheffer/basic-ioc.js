let calculator;
module.exports = {
  run: function () {
    return calculator.run();
  },
  calculator: function (calc) {
    if (arguments.length > 0) {
      calculator = calc;
    } else {
      return calculator;
    }
  }
};
