const inquirer = require('inquirer');
const mysql = require('mysql2');
const consoleTable = require('console.table');

const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'seb',
    database: 'employee_tracker_db'
  },
  console.log(`Connected to the employee database.`)
);

function viewDepartment() {
  db.query('SELECT * FROM department', function (err, results) {
    console.table(results);
  });
}


viewDepartment();

// First Prompt: What would you like to do?
// - View all Employees
// - Add Employee
// - Update Employee Role
// - View All Roles
// - Add Role
// - View All Departments
// - Add Department
// - Quit
