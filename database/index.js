var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'MyNewPass',
  database : 'carousel'
});

connection.connect();

// connection.end();

module.exports = {
  connection:connection
}