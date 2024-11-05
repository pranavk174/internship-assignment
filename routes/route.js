// routes/cryptoRoutes.js
const express = require('express');
const { getCryptoData } = require('../controllers/cryptoController');

const router = express.Router();
router.get('/cryptos', getCryptoData);

module.exports = router;
