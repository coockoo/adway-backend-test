const sdk = require('facebook-nodejs-business-sdk');

const config = require('./config');
const mongo = require('./mongo');

async function handleDelete(req, res, next) {
  try {
    const db = mongo.getDb();
    const campaignsCollection = db.collection('campaigns');
    const campaigns = await campaignsCollection.find().toArray();

    sdk.FacebookAdsApi.init(config.token);
    await Promise.all(
      campaigns.map(async (campaign) => {
        const sdkCampaign = new sdk.Campaign(campaign.fb_campaign_id);
        await sdkCampaign.delete();
        await campaignsCollection.deleteOne({ _id: campaign._id });
      })
    );
  } catch (err) {
    next(err);
  }
  res.status(200).end();
}

module.exports = handleDelete;
