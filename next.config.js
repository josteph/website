const nextBuildId = require('next-build-id');
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const config = {
  poweredByHeader: false,
  generateBuildId: () => nextBuildId({ dir: __dirname }),
  pwa: {
    dest: 'public',
    runtimeCaching,
    buildExcludes: [/middleware-manifest\.json$/],
  },
};

module.exports = withBundleAnalyzer(withPWA(config));
