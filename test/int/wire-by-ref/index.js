const ioc = require('../../../');
const path = require('path');

const container = ioc.initialize(path.resolve('./example.json'));

const starter = container.get('comps.starter');

starter.run();
