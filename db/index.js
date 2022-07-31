const connection = require('./connection');

class EmployeeDB {
  constructor (connection){
    this.connection = connection;
  }
  viewAllDepartments() {
    return this.connection.promise().query("SELECT * FROM DEPARTMENT")
  }
  
  viewAllRoles() {
    return this.connection.promise().query("SELECT * FROM ROLES")
  }
  
  viewAllEmployees() {
    return this.connection.promise().query("SELECT * FROM EMPLOYEES")
  }
}

module.exports = new EmployeeDB(connection);