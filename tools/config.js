const path = require('path');
const fromPairs = require('lodash/fromPairs');
const appRootDir = require('app-root-dir');
const dotenv = require('dotenv-safe');

const envConfig = dotenv.config({
  path: path.resolve(appRootDir.get(), '.env'),
  example: path.resolve(appRootDir.get(), '.env.example'),
});

if (envConfig.error) {
  throw new Error(envConfig.error);
}

const transform = value => {
  let parsedValue;

  try {
    parsedValue = JSON.parse(value);
  } catch (e) {
    if (typeof value === 'string' && /^true|false$/i.test(value)) {
      parsedValue = Boolean(value);
    } else {
      parsedValue = value;
    }
  }

  return parsedValue;
};

const transformed = Object.keys(envConfig.parsed).reduce((acc, key) => {
  acc[key] = transform(envConfig.parsed[key]);

  return acc;
}, {});

const config = {
  get: path => {
    if (typeof transformed[path] === 'undefined') {
      throw new Error(`'${path}' variable not defined in ENV`);
    }

    return transformed[path];
  },

  getObject: () => transformed,

  getConstants: () => {
    const entries = Object.entries(transformed)
      .filter(([key]) => key.startsWith('CONSTANTS_'))
      .map(([key, value]) => {
        const newKey = key.slice(10);
        return [newKey, value];
      });

    const result = fromPairs(entries);
    return result;
  },
};

module.exports = config;
