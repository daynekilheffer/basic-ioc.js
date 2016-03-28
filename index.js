const fs = require('fs');
const path = require('path');

const Container = require('./lib/container');

function readConfig(filename) {
  return JSON.parse(fs.readFileSync(filename, 'utf8'));
}

module.exports = {
  initialize: function (filename) {
    let config = readConfig(filename);
    let cwd = path.dirname(filename);
    return new Container(config, cwd);
  }
};
