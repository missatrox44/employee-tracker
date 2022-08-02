//import required packages
const inquirer = require('inquirer');
const connection = require('./db/connection');
const EmployeeDB = require('./db/index');
const cTable = require('console.table');
const { updateEmployeeRole } = require('./db/index');




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
      if (decision.choice === 'View All Employees') {
        viewEmployeeInfo();
      } else if (decision.choice === 'Add Employee') {
        console.log('Function under construction');
        startProgram();
        //addEmployee function
      } else if (decision.choice === 'Update Employee Role') {
        updateEmp();
      } else if (decision.choice === 'View All Roles') {
        viewRoles();
      } else if (decision.choice === 'Add Roles') {
        addNewRole();
      } else if (decision.choice === 'View All Departments') {
        viewDepts();
      } else if (decision.choice === 'Add Department') {
        addDept();
      } else {
        console.log('Thanks for stopping by!');
      }
    })
}


const viewEmployeeInfo = () => {
  EmployeeDB.viewAllEmployees()
    .then(([rows]) => {
      console.table(rows)
      startProgram();
    })
}

//ADD EMPLOYEE 


//UPDATE EMPLOYEE ROLE
const updateEmp = () => {
  EmployeeDB.callEmployees()
    .then(([rows]) => {
      const employeeChoices = rows.map(employee => {
        return {
          name: `${employee.first_name} ${employee.last_name}`,
          value: employee.id
        }
      })
      // console.log(employeeChoices);
      inquirer.prompt([
        {
          type: 'list',
          name: 'chosenEmp',
          message: 'Which employees role do you want to update?',
          choices: employeeChoices
        }
      ])
        .then((answer) => {
          let empToUpdate = answer.chosenEmp
          // console.log(empToUpdate)
          EmployeeDB.callRoles()
            .then(([rows]) => {
              const roleChoices = rows.map(role => {
                return {
                  name: role.title,
                  value: role.id
                }
              })
              inquirer.prompt([
                {
                  type: 'list',
                  name: 'chosenRole',
                  message: 'Which role would you like to assign this person?',
                  choices: roleChoices
                }
              ])
                .then((answer) => {
                  // console.log(answer)
                  console.log(`Assigned the role ${answer.chosenRole} to ${empToUpdate}`)
                  EmployeeDB.updateEmployeeRole(answer.chosenRole, empToUpdate);
                  startProgram();
                })
            })
        })
    })
}




//VIEW ALL ROLES
const viewRoles = () => {
  EmployeeDB.viewAllRoles()
    .then(([rows]) => {
      console.table(rows)
      startProgram();
    })
}

//ADD ROLES question
//make question a function
//return addRolesQ
const addRolesQ = [
  {
    type: 'input',
    name: 'newRole',
    message: 'What is the name of the role?',
  },
  {
    type: 'input',
    name: 'salary',
    message: 'What is the salary of the role?',
  },
  {
    type: 'input',
    name: 'whichDept',
    message: 'Which department does this role belong to?',
  }
]

//ADD ROLES
const addNewRole = () => {
  inquirer.prompt(addRolesQ)
    .then((answer) => {
      EmployeeDB.insertRole(answer.newRole)
      console.log(`Added ${answer.newRole} to Employee Database.`)
    })
    .then(() => {
      startProgram();
    })
}

//VIEW ALL DEPARTMENTS
const viewDepts = () => {
  EmployeeDB.viewAllDepartments()
    .then(([rows]) => {
      console.table(rows)
      startProgram();
    })
}


//ADD DEPARTMENT question
const addDeptQ = [
  {
    type: 'input',
    name: 'newDept',
    message: 'What is the name of the department?',
  }
]

//ADD DEPARTMENT
const addDept = () => {
  inquirer.prompt(addDeptQ)
    .then((answer) => {
      EmployeeDB.insertDept(answer.newDept)
      console.log(`Added ${answer.newDept} to Employee Database.`)
    })
    .then(() => {
      startProgram();
    })
}




startProgram();
