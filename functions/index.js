const functions = require("firebase-functions");

const scrapeSite = require('./testing_pptr1');
const testDataArray = require('./testData');

exports.scrape = functions
  .runWith({
    timeoutSeconds: 120,
    memory: '512MB' || '2GB',
  })
  .https.onRequest(async (req, res) => {
    const snapShot = await scrapeSite(testDataArray);
    res.type('html').send(snapShot);
  })