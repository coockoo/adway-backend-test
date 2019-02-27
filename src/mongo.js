const { MongoClient } = require('mongodb');
const config = require('./config');

let client;
let db;

async function init() {
  client = await MongoClient.connect(config.mongoUrl, { useNewUrlParser: true });
  db = client.db('adwayBackendTest');
}

function getClient() {
  return client;
}

function getDb() {
  return db;
}

module.exports.init = init;
module.exports.getClient = getClient;
module.exports.getDb = getDb;
