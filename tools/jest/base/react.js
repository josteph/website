module.exports = {
  coverageReporters: [process.env.COV_DIFF_CI ? 'json-summary' : 'lcov'],
  collectCoverageFrom: [
    '<rootDir>/constants/**/*.js',
    '<rootDir>/context/**/*.js',
    '<rootDir>/components/**/*.js',
    '<rootDir>/helpers/**/*.js',
    '<rootDir>/lib/**/*.js',
    '<rootDir>/pages/**/*.js',
    '<rootDir>/styles/**/*.js',

    // Third party codes
    '!**/node_modules/**',

    // Generated files (built files)
    '!<rootDir>/**/build/**',
    '!<rootDir>/**/dist/**',
    '!<rootDir>/**/.next/**',

    // Jest files
    '!<rootDir>/**/coverage/**',
    '!<rootDir>/**/jest.config.js',

    // Test.
    '!**/__tests__/**',
    '!**/__buggy_tests__/**',
    '!**/__test_utils__/**',
    '!**/__data_mocks__/**',
    '!**/__gql_mocks__/**',

    // Config files
    '!<rootDir>/.env-cmdrc.js',
    '!<rootDir>/babel.config.js',
  ],
  // coverageThreshold: {
  //   global: {
  //     statements: 100,
  //     branches: 100,
  //     functions: 100,
  //     lines: 100,
  //   },
  // },
};
