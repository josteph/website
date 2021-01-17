const nextBuildId = require('next-build-id');
const withPWA = require('next-pwa');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const envConstants = require('./constants/getEnvConstants');

const config = {
  generateBuildId: () => nextBuildId({ dir: __dirname }),
  pwa: {
    dest: 'public',
  },
  publicRuntimeConfig: envConstants,
};

module.exports = withBundleAnalyzer(withPWA(config));
