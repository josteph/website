const transformConstants = require('./transform');
const config = require('../tools/config');

const transformedClientConstants = transformConstants(config.getConstants());

module.exports = transformedClientConstants;
