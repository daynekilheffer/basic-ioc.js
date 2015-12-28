var ioc = require('../');
var path = require('path');

var container = ioc.initialize(path.resolve('./example.json'));

var starter = container.get('comps.starter');

starter.run();
