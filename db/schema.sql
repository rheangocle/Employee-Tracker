-- Drops the employee_db if it exists currently --
DROP DATABASE IF EXISTS employee_tracker_db;
-- Creates the emplooyee_db database --
CREATE DATABASE employee_tracker_db;

-- use employee_db database --
USE employee_tracker_db;

-- Table for departments
CREATE TABLE departments (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

-- table for roles
CREATE TABLE roles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30),
  salary DECIMAL(9,2) NOT NULL,
  department_id INT,
  FOREIGN KEY (department_id)
  REFERENCES departments(id)
  ON DELETE SET NULL
);

--table for employees
CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
  manager_id INT,
  FOREIGN KEY (role_id) REFERENCES roles(id),
    FOREIGN KEY(manager_id) REFERENCES employee(id)
);
