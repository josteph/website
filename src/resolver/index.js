const path = require('path');

function resolver({ rootDir }) {
  const appSrc = `${rootDir}/src`;

  return {
    '@': path.resolve(appSrc),
    '@assets': path.resolve(appSrc, './assets/'),
    '@components': path.resolve(appSrc, './components/'),
    '@constants': path.resolve(appSrc, './constants/'),
    '@helpers': path.resolve(appSrc, './helpers/'),
    '@route-gateway': path.resolve(appSrc, './routes/index.js'),
    '@routes': path.resolve(appSrc, './routes/'),
    '@styles': path.resolve(appSrc, './styles/'),
    '@stores': path.resolve(appSrc, './stores/'),
    '@worker': path.resolve(appSrc, './serviceWorker/index.js'),
    '@config': path.resolve(rootDir, './config/'),
  };
}

module.exports = resolver;
