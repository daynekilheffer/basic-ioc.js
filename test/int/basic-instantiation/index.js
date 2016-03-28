const ioc = require('../../../');
const path = require('path');
const chai = require('chai');

const container = ioc.initialize(path.resolve(__dirname, 'example.json'));

const starter = container.get('comps.starter');

describe('basic instantiation', function () {
  it('should require objects based on json configuration', function () {
    chai.expect(starter).to.equal(require('./components/starter'));
  });
});
