require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3000,
  db: {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 27017,
    name: process.env.DB_NAME || 'bitfinex',
  },
  secretKey: process.env.SECRET_KEY || 'bitfinexsecretkey',
};

