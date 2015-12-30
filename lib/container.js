var arrify = require('arrify');
var eyes = require('eyes');
var components = require('./components');

function Container(config, cwd) {
  // loop over each configuration component
  var comps = config.components;
  var componentStore = {};

  components.create(arrify(config.components), {
    store: componentStore,
    cwd: cwd
  });

  eyes.inspect(componentStore);

  components.wire(componentStore);

  eyes.inspect(componentStore);

  this.definitions = componentStore;
};

Container.prototype.get = function (name) {
  var definition = this.definitions[name];
  return definition !== undefined ? definition.instance : undefined;
};

module.exports = Container;
