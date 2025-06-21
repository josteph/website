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

const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const config = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  // Recommended for the `pages` directory, default to `true` for files in `app`.
  reactStrictMode: false,
};

module.exports = withBundleAnalyzer(withContentlayer(withPWA(config)));
