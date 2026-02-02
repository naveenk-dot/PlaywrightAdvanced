module.exports = {
  default: [
    '--require-module', 'ts-node/register',
    '--require', 'support/**/*.ts',
    '--require', 'step-definitions/**/*.ts'
  ].join(' '),
  paths: ['features/**/*.feature'],
};
