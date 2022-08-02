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
      if (decision.choice === 'View All Employees') {
        viewEmployeeInfo();
      } else if (decision.choice === 'Add Employee') {
        console.log('Function under construction');
        startProgram();
        //addEmployee function
      } else if (decision.choice === 'Update Employee Role') {
        console.log('Function under construction');
        // updateEmp();
        startProgram();
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


// //UPDATE EMPLOYEE ROLE
// const updateEmp = () => {
//   EmployeeDB.callEmployees()
//     .then(([rows]) => {
//       const employeeChoices = rows.map(employee => {
//         return {
//           name: `${employee.first_name} ${employee.last_name}`,
//           value: employee.first_name
//         }
//       })
//       inquirer.prompt([
//         {
//           type: 'list',
//           name: 'chosenEmp',
//           message: 'Which employees role do you want to update?',
//           choices: employeeChoices
//         }
//       ])
//         .then((answer) => {
//           EmployeeDB.insertDept(answer.chosenEmp)
//           // console.log(`Selected ${answer.chosenEmp} to update.`)
//         })
//         .then(() => {
//           EmployeeDB.callRoles()
//             .then(([rows]) => {
//               const roleChoices = rows.map(role => {
//                 return {
//                   title: `${role.title}`,
//                   value: role.title
//                 }
//               })
//               inquirer.prompt([
//                 {
//                   type: 'list',
//                   name: 'chosenRole',
//                   message: 'Which role would you like to assign this person?',
//                   choices: roleChoices
//                 }
//               ])
//                 .then((answer) => {
//                   console.log(`Assigned the role ${answer.chosenRole} to ${answer.chosenEmp}`)
//                 })
//             })startProgram();
//         })
//     })
// }




//VIEW ALL ROLES
const viewRoles = () => {
  EmployeeDB.viewAllRoles()
    .then(([rows]) => {
      console.table(rows)
      startProgram();
    })
}

//ADD ROLES question
const addRolesQ = [
  {
    type: 'input',
    name: 'newRole',
    message: 'What is the name of the role?',
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
