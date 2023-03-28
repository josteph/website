// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

/**
 * This file is only used by dependency-cruiser to be able resolve alias & extensions
 * Please do not use this file for any other usage, but you may extend something from this config
 */
module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname),
      'contentlayer/generated': '../.contentlayer/generated',
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
};
