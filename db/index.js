const connection = require('./connection');
const inquirer = require('inquirer');

class EmployeeDB {
  constructor (connection){
    this.connection = connection;
  }
  //include id, name
  viewAllDepartments() {
    return this.connection.promise().query("SELECT * FROM DEPARTMENTS")
  }
  
  //include id, job title, dept, salary
  viewAllRoles() {
    return this.connection.promise().query("SELECT roles.id, roles.title, departments.dept, roles.salary FROM roles INNER JOIN departments ON roles.department_id=departments.id")
  }
  
  //include id, firstName, lastName, job title, dept, salary, manager reports to
  viewAllEmployees() {
    return this.connection.promise().query("SELECT employees.id, employees.first_name, employees.last_name, roles.title, departments.dept AS department, roles.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employees LEFT JOIN roles on employees.role_id = roles.id LEFT JOIN departments on roles.department_id = departments.id LEFT JOIN employees manager on manager.id = employees.manager_id")
  }

  addDept(input) {
    return this.connection.promise().query("INSERT INTO departments (dept) VALUES (?)", input)
    }
  }


module.exports = new EmployeeDB(connection);

