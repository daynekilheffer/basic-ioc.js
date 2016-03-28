const arrify = require('arrify');
const components = require('./components');

function Container(config, cwd) {
  let componentStore = {};

  components.create(arrify(config.components), {
    store: componentStore,
    cwd: cwd
  });

  components.wire(componentStore);

  this.definitions = componentStore;
}

Container.prototype.get = function (name) {
  var definition = this.definitions[name];
  return definition !== undefined ? definition.instance : undefined;
};

module.exports = Container;
