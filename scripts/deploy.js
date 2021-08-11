const fs = require('fs');
const exec = require('./utils/verboseExec');

const { TARGET_ENV = 'production', NETLIFY } = process.env;

if (!fs.existsSync('.env')) {
  exec(`cp environment/.env.${TARGET_ENV} .env`);
}

exec('next build');

if (NETLIFY) {
  exec('next export');
}
