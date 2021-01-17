const baseConfig = require('./tools/jest/base/react');
const resolvers = require('./tools/jest/resolvers/react')();
const transformers = require('./tools/jest/transformers/react')();

module.exports = {
  ...baseConfig,
  projects: [
    {
      displayName: 'Test Client',
      testMatch: ['<rootDir>/**/__tests__/**/*.js'],
      testEnvironment: 'jsdom',
      moduleNameMapper: resolvers,
      transform: transformers,
      setupFilesAfterEnv: ['./tools/jest/setup/react/afterEnv'],
    },
  ],
};
