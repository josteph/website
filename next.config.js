const nextBuildId = require('next-build-id');
const withPWA = require('next-pwa');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const { CI, NODE_ENV } = process.env;

const config = {
  target: 'serverless',
  assetPrefix: NODE_ENV === 'production' && !CI ? 'https://josteph.github.io' : '',
  poweredByHeader: false,
  generateBuildId: () => nextBuildId({ dir: __dirname }),
  pwa: {
    dest: 'public',
  },
};

module.exports = withBundleAnalyzer(withPWA(config));
