var arrify = require('arrify');
var path = require('path');

function create (definitions, config) {
  var results = [];
  config.counter = config.counter || 0;

  definitions = arrify(definitions);

  definitions.forEach(function (definition) {
    var def = {};
    var target = path.resolve(config.cwd, definition.source);
    def.instance = require(target);
    def.id = definition.id || '_comp' + config.counter;
    def.properties = arrify(definition.properties);
    def.properties.forEach(function (prop) {
      if (prop.source) {
        var result = create(prop, config);
        prop.ref = result[0].id;
      }
    });
    config.store[def.id] = def;
    results.push(def);
  });
  return results;
}

function wire (store) {
  Object.keys(store).forEach(function (componentName) {
    var definition = store[componentName];
    definition.properties.forEach(function (prop) {
      definition.instance[prop.name](store[prop.ref].instance);
    });
  });
}

module.exports = {
  create: create,
  wire: wire
}
