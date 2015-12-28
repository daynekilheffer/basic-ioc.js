var fs = require('fs');
var path = require('path');

var Container = require('./lib/container');

function readConfig(filename) {
  return JSON.parse(fs.readFileSync(filename, 'utf8'));
}

module.exports = {
  initialize: function (filename) {
    var config = readConfig(filename);
    var cwd = path.dirname(filename);
    var container = new Container(config, cwd);
    return container;
  }
}
