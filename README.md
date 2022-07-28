# Employee-Tracker

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

- [User Story](#user-story)
- [Summary](#Summary)
- [Software](#Software)
- [Installations](#Installations)
- [Mock-up](#Mock-up)

## User Story

```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

## Summary

This is a command-line application that allows users to interact with an employee database from MySQL. When starting the application, the user will be given options to: view all departments, view all roles, view all employees, add a department, add a role, add an employee, update an employee role, view employees by manager, view employees by department, and update employee managers. After the user selects an option, they will be able to either view the results in a table form in the console or update the values of the tables in the database. This application also features a fun terminal using chalk, gradient, and figlet.

## Software

- Node.js
- MySQL

## Installations

- ✅ Inquirer: asking questions in the command line

```
npm i inquirer
```

- ✅ MySQL2: using MySQL in Node.js

```
npm i mysql2
```

- ✅ Figlet: ASCII Art

```
npm install figlet
```

- ✅ Chalk - colorful CLI

```
npm i chalk
```

- ✅ Gradient-string - color gradients in terminal

```
npm i gradient-string
```

## Mock-up

[Employee Tracker Walkthrough video](https://drive.google.com/file/d/1c_XJDWpE43Br2zwo4pNvWbPwUdp49PDQ/view)

![GIF of application](./assets/Employee%20Tracker%20Walkthrough.gif)

---

MIT License

Copyright (c) 2022 Rhea Le

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
