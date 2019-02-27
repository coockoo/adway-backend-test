const sdk = require('facebook-nodejs-business-sdk');

const config = require('./config');
const { ValidationError } = require('./errors');

async function handleCreate(req, res, next) {
  try {
    const { name, objective } = req.query;
    const availableObjectives = Object.values(sdk.Campaign.Objective);
    if (!availableObjectives.includes(objective)) {
      throw new ValidationError(
        `Parameter 'objective' should be one of ${availableObjectives.join(', ')}`
      );
    }
    if (!name) {
      throw new ValidationError("Parameter 'name' is required");
    }
    sdk.FacebookAdsApi.init(config.token);
    const account = new sdk.AdAccount(config.addAccountId);
    const newCampaign = await account.createCampaign([sdk.Campaign.Fields.Id], {
      [sdk.Campaign.Fields.name]: name,
      [sdk.Campaign.Fields.status]: sdk.Campaign.Status.paused,
      [sdk.Campaign.Fields.objective]: objective,
    });
    console.log('new campaign id', newCampaign.id);
  } catch (error) {
    next(error);
  }
  res.status(200).json();
}

module.exports = handleCreate;
