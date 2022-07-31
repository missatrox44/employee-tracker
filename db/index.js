const connection = require('./connection');

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
    return this.connection.promise().query("SELECT * FROM EMPLOYEES")
  }
}

module.exports = new EmployeeDB(connection);