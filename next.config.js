const runtimeCaching = require('next-pwa/cache');
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  runtimeCaching,
  buildExcludes: [/middleware-manifest\.json$/],
});
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const config = {
  experimental: {
    appDir: false,
  },
  poweredByHeader: false,

  // Recommended for the `pages` directory, default to `true` for files in `app`.
  reactStrictMode: false,
};

module.exports = withBundleAnalyzer(withPWA(config));
