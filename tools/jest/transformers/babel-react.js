const base = require('./babel-options');

const babelOptions = {
  ...base,
  presets: [...base.presets],
};

module.exports = require('babel-jest').createTransformer(babelOptions);
