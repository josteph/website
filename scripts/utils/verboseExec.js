const { execSync } = require('child_process');
const appRootDir = require('app-root-dir');

module.exports = (command) => {
  execSync(command, { stdio: 'inherit', cwd: appRootDir.get() });
};
