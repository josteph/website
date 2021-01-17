const fs = require('fs');
const paths = require('../tools/paths');
const exec = require('./utils/verboseExec');

const { TARGET_ENV = 'production' } = process.env;

if (!fs.existsSync(paths.dotenv)) {
  exec(`cp ${paths.appEnvironment}/.env.${TARGET_ENV} .env`);
}

exec(`next build`);
