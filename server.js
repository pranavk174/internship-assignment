// server.js
const express = require('express');
const {connect} = require("./config/database")
const cors = require('cors');
const cryptoRoutes = require('./routes/route');
const { fetchAndStoreCryptoData } = require('./controllers/cryptoController');
const env = require("dotenv")
env.config()

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.static('public'));

// Connect to MongoDB
connect()
// Schedule data fetch every hour
fetchAndStoreCryptoData();
setInterval(fetchAndStoreCryptoData, 60 * 60 * 1000);

// Routes
app.use('/api', cryptoRoutes);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
