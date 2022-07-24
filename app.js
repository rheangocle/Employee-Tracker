import inquirer from 'inquirer';
import mysql from 'mysql2';
import { table } from 'table';
import figlet from 'figlet';
import chalk from 'chalk';
import gradient from 'gradient-string';

//Ascii art for welcome text

// figlet('Welcome to \n Employee Tracker!', (err, data) => {
//   console.log(gradient.pastel(data));
// });

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
const sleep = (ms = 1000) => new Promise((r) => setTimeout(r, ms));


async function start() {
  figlet('Welcome to \n Employee Tracker!', (err, data) => {
    console.log(gradient.pastel(data));
  });
  await sleep();
}


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
      if (answer.select === 'Add a department') {
        addDepartment();
      } else if (answer.select === 'Add a role') {
        addRole();
      } else if (answer.select === 'Add an employee') {
        addEmployee();
      } else if (answer.select === 'Update an employee role') {
        //something here
      } else {
        process.exit(0);
      }
    })
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
      message: "Enter a department for this role",
      name: 'department'
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
      message: 'What is the employee\'s role?',
      name: 'role'
    },
    {
      type: 'input',
      message: 'Who is the employee\'s manager?',
      name: 'manager'
    },
  ])
}

await start();
await selectOption();