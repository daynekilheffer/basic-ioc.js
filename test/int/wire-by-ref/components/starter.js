console.log('loading starter');

var calculator;
module.exports = {
  run: function () {
    console.log('running starter');
    calculator.run();
  },
  calculator: function (calc) {
    calculator = calc;
  }
}
