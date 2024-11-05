// controllers/cryptoController.js
const axios = require('axios');
const Crypto = require('../models/Schema');

const fetchAndStoreCryptoData = async () => {
  try {
    const { data } = await axios.get('https://api.wazirx.com/api/v2/tickers');
    const top10Data = Object.values(data).slice(0, 10);

    await Crypto.deleteMany(); // Clear old data
    const cryptoData = top10Data.map((item) => ({
      name: item.name,
      last: item.last,
      buy: item.buy,
      sell: item.sell,
      volume: item.volume,
      base_unit: item.base_unit
    }));
    await Crypto.insertMany(cryptoData);
    console.log('Data fetched and stored successfully.', cryptoData );
  } catch (error) {
    console.error('Error fetching or storing data:', error);
  }
};

const getCryptoData = async (req, res) => {
  try {
    const cryptoData = await Crypto.find();
 
    res.json(cryptoData);
  } catch (error) {
    res.status(500).send({ message: 'Error retrieving data' });
  }
};

module.exports = { fetchAndStoreCryptoData, getCryptoData };
