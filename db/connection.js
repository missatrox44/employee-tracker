const mysql = require('mysql2');

//connect to database
const connection = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'seb',
    database: 'employee_tracker_db'
  },
  console.log('Connected to the employee database.')
);

connection.connect(function (err) {
  if(err) throw err;
});

module.exports = connection;