const { argv } = require('yargs');

if (!argv.id) {
  throw new Error('--id parameter is required');
}
if (!argv.token) {
  throw new Error('--token parameter is required');
}

module.exports = {
  port: argv.port || 3000,
  adAccountId: `act_${argv.id}`,
  token: argv.token,
  mongoUrl: argv.mongo || 'mongodb://localhost:27017',
};
