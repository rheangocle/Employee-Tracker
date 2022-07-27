import inquirer from 'inquirer';
import mysql from 'mysql2';
import figlet from 'figlet';
import chalk from 'chalk';
import gradient from 'gradient-string';
import Table from 'cli-table';

let table = new Table({
  head: ['TH 1 label', 'TH 2 label'],
  colWidths: [100, 200]
})
const log = console.log;

//create connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'employee_tracker_db',
  password: 'root'
})

//Ascii art for welcome text

// figlet.text('Welcome to Employee Tracker!', {
//   font: 'big',
//   horizontalLayout: 'standard',
//   verticalLayout: 'default',
//   width: 100,
//   whitespaceBreak: true
// }, function (err, data) {
//   if (err) {
//     console.log('Something went wrong...');
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// })

//Timeout to display ascii art
const sleep = (ms = 300) => new Promise((r) => setTimeout(r, ms));

//Displaying ascii art
async function start() {
  figlet('Welcome to \n Employee Tracker!', (err, data) => {
    log(gradient.pastel(data));
  });
  await sleep();
}

//prompt user to choose an option 
async function selectOption() {
  inquirer.prompt([
    {
      type: 'list',
      message: 'Choose from the options below:',
      choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'Exit'],
      name: 'select',
    },
  ])
    .then((answer) => {
      switch (answer.select) {
        case 'View all departments':
          viewDepartments();
          break;
        case 'View all roles':
          viewRoles();
          break;
        case 'View all employees':
          viewEmployees();
          break;
        case 'Add a department':
          addDepartment();
          break;
        case 'Add a role':
          addRole();
          break;
        case 'Add an employee':
          addEmployee();
          break;
        case 'Update an employee role':
          //something here
          break;
        default: connection.end();
          //process.exit(0);
          break;
      }
      // if (answer.select === 'Add a department') {
      //   addDepartment();
      // } else if (answer.select === 'Add a role') {
      //   addRole();
      // } else if (answer.select === 'Add an employee') {
      //   addEmployee();
      // } else if (answer.select === 'Update an employee role') {
      //   //something here
      // } else {
      //   process.exit(0);
      // }
    })
}

//let theEmail = '';
function viewDepartments() {
  connection.query(`SELECT id AS 'Department ID', name AS 'Department'
  FROM departments`,
    function (err, results) {
      if (err) {
        log(chalk.bgRedBright("Sorry, there was an error in retrieving your results!"));
      }
      // for (let i = 0; i < results.length; i++) {
      //   for (obj of results[i]) {
      //     //obj = whatever field its currently on (name, email, w/e)
      //     theShit = "";
      //     theShit += ('| ' + results[i].id + ' | ' + rows[i].name);
      //     theEmail += theShit + "<BR>";
      //     console.log(theEmail);
      //   }
      // }
      console.table(results);
      selectOption();
    }
  )
}

function viewRoles() {
  connection.query(`SELECT id AS 'Role ID', title AS 'Role Title', salary AS 'Salary', department_id AS 'Department ID'
  FROM roles`,
    function (err, results) {
      if (err) {
        log("Sorry, there was an error in retrieving your results 😓.")
      }
      console.table(results);
      selectOption();
    }
  )
}

function viewEmployees() {
  connection.query(`SELECT e.id AS 'Employee ID', e.first_name AS 'First Name', e.last_name AS 'Last Name', r.title AS 'Title', d.name AS 'Department', r.salary AS 'Salary', e.manager_id AS 'Manager ID', CONCAT(m.FIRST_NAME, ' ', m.LAST_NAME) AS 'Manager Name'
  FROM employee e
  LEFT JOIN employee m ON m.id = e.MANAGER_ID
  LEFT JOIN roles r ON e.role_id = r.id
  LEFT JOIN departments d ON r.department_id = d.id
  ORDER BY d.name`,
    function (err, results) {
      if (err) {
        log("Sorry, there was an error in retrieving your results 😓.")
      }
      console.table(results);
      selectOption();
    }
  )
}

//Prompt user to add a new department
function addDepartment() {
  inquirer.prompt([
    {
      type: 'input',
      message: 'What is the name of the department?',
      name: 'departmentName',
      validate: function (input) {
        if (input.length == 0) {
          return console.log('Please enter a name.');
        } else { return true };
      },
      //Capitalizing name
      filter: function (input) {
        return input.split(" ").map(word => {
          return word.substring(0, 1).toUpperCase() + word.substring(1);
        }).join(" ");
      }
    },
    {
      type: 'input',
      message: 'What is the department ID?',
      name: 'departmentId',
      filter(answer) {
        return parseInt(answer);
      }
    },
  ])
    .then((answer) => {
      let values = {
        id: answer.departmentId,
        name: answer.departmentName
      };
      connection.query(`INSERT INTO departments SET ?`, values,
        function (err, results) {
          if (err) {
            log("Sorry, there was an error in retrieving your results 😓.")
          }
          log(chalk.bgGreenBright(`${answer.departmentName} was added as a new department!`));
          selectOption();
        });
    })
}

// Prompt user to add a new role
function addRole() {
  inquirer.prompt([
    {
      type: 'input',
      message: 'What is the role ID?',
      name: 'newRoleId',
      filter(answer) {
        return parseInt(answer);
      }
    },
    {
      type: 'input',
      message: 'What is the role?',
      name: 'newRole',
      validate: function (input) {
        if (input.length == 0) {
          return console.log('Please enter a name.');
        } else { return true };
      },
      //Capitalizing name
      filter: function (input) {
        return input.split(" ").map(word => {
          return word.substring(0, 1).toUpperCase() + word.substring(1);
        }).join(" ");
      }
    },
    {
      type: 'input',
      message: 'What is the salary for this role?',
      name: 'salary'
    },
    {
      type: 'input',
      message: "Enter the department ID for this role",
      name: 'departmentId',
      filter(answer) {
        return parseInt(answer);
      }
    }
  ]).then((answer) => {
    let values = {
      id: answer.newRoleId,
      title: answer.newRole,
      salary: answer.salary,
      department_id: answer.departmentId
    };
    connection.query(`INSERT INTO roles SET ?`, values,
      function (err, results) {
        if (err) {
          log("Sorry, there was an error in retrieving your results 😓.")
        }
        log(chalk.bgGreen(`${answer.newRole} was added as a new role!`));
        selectOption();
      });
  })
}

function addEmployee() {
  inquirer.prompt([
    {
      type: 'input',
      message: 'What is the employee\'s ID?',
      name: 'newEmployeeId',
      filter(answer) {
        return parseInt(answer);
      }
    },
    {
      type: 'input',
      message: 'What is the employee\'s first name?',
      name: 'firstName',
      filter: function (input) {
        return input.split(" ").map(word => {
          return word.substring(0, 1).toUpperCase() + word.substring(1);
        }).join(" ");
      }
    },
    {
      type: 'input',
      message: 'What is the employee\'s last name?',
      name: 'lastName',
      filter: function (input) {
        return input.split(" ").map(word => {
          return word.substring(0, 1).toUpperCase() + word.substring(1);
        }).join(" ");
      }
    },
    {
      type: 'input',
      message: 'What is the employee\'s role ID?',
      name: 'roleId',
      filter(answer) {
        return parseInt(answer);
      }
    },
    {
      type: 'input',
      message: 'Who is the employee\'s manager ID?',
      name: 'managerId',
      filter(answer) {
        return parseInt(answer);
      }
    },
  ]).then((answer) => {
    let values = {
      id: answer.newEmployeeId,
      first_name: answer.firstName,
      last_name: answer.lastName,
      role_id: answer.roleId,
      manager_id: answer.managerId
    };
    connection.query(`INSERT INTO employee SET ?`, values,
      function (err, results) {
        if (err) {
          log("Sorry, there was an error in retrieving your results 😓.")
        }
        log(chalk.bgYellow(`${answer.firstName + ' ' + answer.lastName} was added as a new employee!`));
        selectOption();
      });
  })
}

//init functions
await start();
await selectOption();