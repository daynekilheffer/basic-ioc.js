const ioc = require('../../../');
const path = require('path');
const chai = require('chai');

describe('wire by reference', function () {
  let container;
  let starter;

  beforeEach(function () {
    container = ioc.initialize(path.resolve(__dirname, 'example.json'));
    starter = container.get('comps.starter');
  });

  it('should require objects based on json configuration', function () {
    chai.expect(starter).to.equal(require('./components/starter'));
    chai.expect(starter.calculator()).to.equal(require('./components/calc1'));
  });

  it('should wire the calculator into the starter program', function () {
    let calc = require('./components/calc1');
    calc.text('calculator text');
    chai.expect(starter.run()).to.equal('calculator text');
  });

  it('should expose both components', function () {
    chai.expect(container.get('comps.starter')).to.equal(require('./components/starter'));
    chai.expect(container.get('comps.calc1')).to.equal(require('./components/calc1'));
  });
});
