const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
  host: 'localhost',
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: 'wild_circus',
});

connection.connect(err => {
  if(err) {
    return err;
  }
});

module.exports = connection;