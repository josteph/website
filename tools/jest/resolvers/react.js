function react(result = {}) {
  return {
    ...result,
    '^@/(.*)$': '<rootDir>/$1',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
  };
}

module.exports = react;
