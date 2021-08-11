const nextBuildId = require('next-build-id');
const withPWA = require('next-pwa');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const { NETLIFY, NODE_ENV } = process.env;

const config = {
  assetPrefix: NODE_ENV === 'production' && !NETLIFY ? 'https://josteph.github.io' : '',
  poweredByHeader: false,
  generateBuildId: () => nextBuildId({ dir: __dirname }),
  pwa: {
    dest: 'public',
  },
  future: {
    webpack5: true,
  },
};

module.exports = withBundleAnalyzer(withPWA(config));
