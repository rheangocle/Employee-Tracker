// const figlet = require('figlet');
const inquirer = import('inquirer');
const mysql = import('mysql2');
import { table } from 'table';
import figlet from 'figlet';
import chalk from 'chalk';
//import chalkAnimation from 'chalk-animation';

//const log = console.log;
//log(chalk.bgCyanBright('Hello') + ' World' + chalk.red('!'));

//Ascii art for welcome text
figlet.text('Welcome to Employee Tracker!', {
  font: 'big',
  horizontalLayout: 'standard',
  verticalLayout: 'default',
  width: 100,
  whitespaceBreak: true
}, function (err, data) {
  if (err) {
    console.log('Something went wrong...');
    console.dir(err);
    return;
  }
  console.log(data);
})
  ;

