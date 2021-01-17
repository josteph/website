module.exports = {
  presets: ['next/babel'],
  plugins: ['lodash'],
  env: {
    production: {
      plugins: [
        [
          'transform-react-remove-prop-types',
          {
            mode: 'remove',
            removeImport: true,
            additionalLibraries: ['prop-types-extra'],
            ignoreFilenames: ['node_modules'],
          },
        ],
      ],
    },
  },
};
