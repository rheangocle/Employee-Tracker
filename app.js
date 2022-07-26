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

let theEmail = '';
function viewDepartments() {
  connection.query('SELECT * FROM departments',
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
  connection.query('SELECT * FROM `roles`',
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
  connection.query('SELECT * FROM `employee`',
    function (err, results) {
      if (err) {
        log("Sorry, there was an error in retrieving your results 😓.")
      }
      console.table(results);
      selectOption();
    }
  )
}

function addDepartment() {
  inquirer.prompt([
    {
      type: 'input',
      message: 'What is the name of the department?',
      name: 'department_name',
    },
  ])
}

function addRole() {
  inquirer.prompt([
    {
      type: 'input',
      message: 'What is the role?',
      name: 'newRole',
    },
    {
      type: 'input',
      message: 'What is the salary for this role?',
      name: 'salary'
    },
    {
      type: 'input',
      message: "Enter the department ID for this role",
      name: 'departmentId'
    }
  ])
}

function addEmployee() {
  inquirer.prompt([
    {
      type: 'input',
      message: 'What is the employee\'s first name?',
      name: 'firstName'
    },
    {
      type: 'input',
      message: 'What is the employee\'s last name?',
      name: 'lastName'
    },
    {
      type: 'input',
      message: 'What is the employee\'s role ID?',
      name: 'roleId'
    },
    {
      type: 'input',
      message: 'Who is the employee\'s manager ID?',
      name: 'managerId'
    },
  ])
}

//init functions
await start();
await selectOption();