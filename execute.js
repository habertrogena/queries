const mysql = require('mysql');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv')

// Load environment variables from .env file
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

// Read the SQL file containing queries and functions
const sqlFile = path.join(__dirname, 'queries.sql');
const sqlContent = fs.readFileSync(sqlFile, 'utf8');

function executeSQL() {
  connection.connect(err => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      process.exit(1);
    }

    connection.query(sqlContent, (error, results) => {
      if (error) {
        console.error('Error executing SQL:', error);
        process.exit(1);
      }

      console.log('SQL executed successfully:', results);
      connection.end();
    });
  });
}

executeSQL();
