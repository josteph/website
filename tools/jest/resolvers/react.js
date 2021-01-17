function react(result = {}) {
  return {
    ...result,
    '^@/(.*)$': '<rootDir>/$1',
    '^@assets(.*)$': '<rootDir>/assets$1',
    '^@components(.*)$': '<rootDir>/components$1',
    '^@constants(.*)$': '<rootDir>/constants$1',
    '^@context(.*)$': '<rootDir>/context$1',
    '^@graphql(.*)$': '<rootDir>/graphql$1',
    '^@helpers(.*)$': '<rootDir>/helpers$1',
    '^@hooks(.*)$': '<rootDir>/hooks$1',
    '^@lib(.*)$': '<rootDir>/lib$1',
    '^@styles(.*)$': '<rootDir>/styles$1',
    '^@routes(.*)$': '<rootDir>/pages$1',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
  };
}

module.exports = react;
