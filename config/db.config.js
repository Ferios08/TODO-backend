var mysql = require('mysql')
require('dotenv').config();
process.env.NODE_ENV = 'dev';
const db_host = process.env.DB_HOST;
const db_port = process.env.DB_PORT;
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
var db_name = 'semidb-' + (process.env.NODE_ENV || 'dev');

var pool = mysql.createPool({
  connectionLimit: 10,
  host: db_host,
  port: db_port,
  user: db_user,
  password: db_pass,
  database: db_name
})
pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.error('Database connection was closed.')
    }
    if (err.code === 'ER_CON_COUNT_ERROR') {
      console.error('Database has too many connections.')
    }
    if (err.code === 'ECONNREFUSED') {
      console.error('Database connection was refused.')
    }
  }
  if (connection) connection.release()
  return
})
module.exports = pool