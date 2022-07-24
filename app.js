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

const selectOption = inquirer.prompt([
  {
    type: 'list',
    message: 'Choose from the options below:',
    choices: ['View all departments', 'View all roles', 'View all employees', 'Add a role', 'Add an employee', 'Update an employee role'],
    name: 'select',
  },
])
