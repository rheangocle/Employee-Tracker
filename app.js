import inquirer from 'inquirer';
import mysql from 'mysql2';
import figlet from 'figlet';
import chalk from 'chalk';
import gradient from 'gradient-string';

const log = console.log;

//create connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'employee_tracker_db',
  password: 'root'
})

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
      choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'View Employees by Manager', 'View Employees by Department', 'Exit'],
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
        case 'View Employees by Manager':
          viewByManager();
          break;
        case 'View Employees by Department':
          viewByDepartment();
          break;
        default: connection.end();
          //process.exit(0);
          break;
      }
    })
}

//To view all departments
function viewDepartments() {
  connection.query(`SELECT id AS 'Department ID', name AS 'Department'
  FROM departments`,
    function (err, results) {
      if (err) {
        log(chalk.bgRedBright("Sorry, there was an error in retrieving your results!"));
      }
      //View table
      console.table(results);
      //Select other options
      selectOption();
    }
  )
}

//To view all roles
function viewRoles() {
  connection.query(`SELECT id AS 'Role ID', title AS 'Role Title', salary AS 'Salary', department_id AS 'Department ID'
  FROM roles`,
    function (err, results) {
      if (err) {
        log(chalk.bgRedBright("Sorry, there was an error in retrieving your results!"));
      }
      console.table(results);
      selectOption();
    }
  )
}

//To view all employees with roles and managers
function viewEmployees() {
  connection.query(`SELECT e.id AS 'Employee ID', e.first_name AS 'First Name', e.last_name AS 'Last Name', r.title AS 'Title', d.name AS 'Department', r.salary AS 'Salary', e.manager_id AS 'Manager ID', CONCAT(m.FIRST_NAME, ' ', m.LAST_NAME) AS 'Manager Name'
  FROM employee e
  LEFT JOIN employee m ON m.id = e.MANAGER_ID
  LEFT JOIN roles r ON e.role_id = r.id
  LEFT JOIN departments d ON r.department_id = d.id
  ORDER BY d.name`,
    function (err, results) {
      if (err) {
        log(chalk.bgRedBright("Sorry, there was an error in retrieving your results!"));
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
      name: 'departmentId'
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
            log(chalk.bgRedBright("Sorry, there was an error in retrieving your results!"));
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
      name: 'newRoleId'
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
      name: 'departmentId'
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
          log(chalk.bgRedBright("Sorry, there was an error in retrieving your results!"));
        }
        log(chalk.bgGreen(`${answer.newRole} was added as a new role!`));
        selectOption();
      });
  })
}

//Prompt user to add a new employee
function addEmployee() {
  inquirer.prompt([
    {
      type: 'input',
      message: 'What is the employee\'s ID?',
      name: 'newEmployeeId'
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
      name: 'roleId'
    },
    {
      type: 'input',
      message: 'Who is the employee\'s manager ID?',
      name: 'managerId'
    },
  ]).then((answer) => {
    //Creating an object to dynamically edit values
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
          log(chalk.bgRedBright("Sorry, there was an error in retrieving your results!"));
        }
        //Informing user employee was created
        log(chalk.bgYellow(`${answer.firstName + ' ' + answer.lastName} was added as a new employee!`));
        selectOption();
      });
  })
}

//View employees by manager
function viewByManager() {
  connection.query(`SELECT m.id AS 'Manager ID', CONCAT(m.FIRST_NAME, ' ', m.LAST_NAME) AS 'Manager Name', rls.title as 'Manager Title', CONCAT(e.first_name, ' ', e.last_name) AS 'Employee Name', r.title AS 'Employee Role', d.name AS 'Department'
  FROM employee m
  JOIN roles rls on m.ROLE_ID  = rls.id
  JOIN employee e ON e.MANAGER_ID = m.id
  JOIN roles r ON e.role_id = r.id
  JOIN departments d ON r.department_id = d.id
  ORDER BY m.FIRST_NAME`,
    function (err, results) {
      if (err) {
        log(chalk.bgRedBright("Sorry, there was an error in retrieving your results!"));
      }
      console.table(results);
      selectOption();
    }
  )
}

//View employees by department
function viewByDepartment() {
  connection.query(`SELECT d.name AS 'Department', CONCAT(e.first_name, ' ', e.last_name) AS 'Employee Name', r.title AS 'Employee Role'
  FROM employee e
  JOIN roles rls on e.role_id  = rls.id
  JOIN roles r ON e.role_id = r.id
  JOIN departments d ON r.department_id = d.id
  ORDER BY d.name`,
    function (err, results) {
      if (err) {
        log(chalk.bgRedBright("Sorry, there was an error in retrieving your results!"));
      }
      console.table(results);
      selectOption();
    }
  )
}
//init functions
await start();
await selectOption();