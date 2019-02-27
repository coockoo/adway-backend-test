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

  // Development account
  // token:
  // 'EAAcHfIID1jIBAH2YcS2BwZBZACtz6ayGmDfIL4ihcJoWT4hwxZCGqLO6ic9nlmSU5YxNhtjmP6i8igQ3bV2ZAXwKIYdRViDZBMJ6Gut7EAdBmGu2sj7UhLQC0ZBZA1KBeVSKsR4WX8XRjKwbcBmZA7pZAwEQiuK4UlELY7hdxQgrTCXD6vz8ckn3ZB2ZCnMHLjzgMIZD',
  // addAccountId: 'act_244915619722504',

  // Personal account
  //493190961147083
  //addAccountId: `act_${}`,
  token:
    'EAAcHfIID1jIBACVDEYA3GPa22QZAZC5c7ZBD5TNucX8p7ulX52ehke8wz4Lo8Q3egWAcU2DwLoQAHaHL8qH8HNIZChAg000bi3nKgv46lScsaLEyG6EBvZAERZBe4Tl1lWJkbmbOX1bqECDjoRv9XmqOWU1T32089QwZCFb1a6lZBQZDZD',

  // addAccountId: '352697805330464',
  mongoUrl: argv.mongo || 'mongodb://localhost:27017',
};
