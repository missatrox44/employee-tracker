//import required packages
const inquirer = require('inquirer');
const connection = require('./db/connection');
const EmployeeDB = require('./db/index');
const cTable = require('console.table');




//main menu prompts
const mainMenu = [
  {
    type: 'list',
    name: 'choice',
    message: 'What would you like to do?',
    choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Roles', 'View All Departments', 'Add Department', 'Quit'],
  }
]

const startProgram = () => {
  inquirer.prompt(mainMenu)
  .then(decision => {
    if(decision.choice === 'View All Employees'){
      console.log('view employees function');
    } else if (decision.choice === 'Add Employee'){
      console.log('add employee function');
    } else if (decision.choice === 'Update Employee Role'){
      console.log('update employee function');
    } else if (decision.choice === 'View All Roles'){
      console.log('view all roles function');
    } else if (decision.choice === 'Add Roles'){
      console.log('add roles function');
    } else if (decision.choice === 'View All Departments'){
      console.log('view all departments function');
    } else if (decision.choice === 'Add Department'){
      console.log('add department function');
    } else {
      console.log('Thanks for stopping by!');
    }
  })
}

const viewEmployees = () =>

// startProgram();

// function viewDepartment() {
//   db.query('SELECT * FROM department', function (err, results) {
//     console.table(results);
//   });
// }


// viewDepartment();
