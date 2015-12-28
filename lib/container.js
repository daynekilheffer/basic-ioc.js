var path = require('path');

function Container(config, cwd) {
  // loop over each configuration component
  var components = config.components;
  var componentDefintions = {};
  var counter = 0;

  components.forEach(function (component) {
    var definition = {};
    var target = path.resolve(cwd, component.source);
    definition.instance = require(target);
    definition.name = component.name || '_comp' + counter;
    componentDefintions[definition.name] = definition;
  });

  this.definitions = componentDefintions;
};

Container.prototype.get = function (name) {
  var definition = this.definitions[name];
  return definition !== undefined ? definition.instance : undefined;
};

module.exports = Container;
