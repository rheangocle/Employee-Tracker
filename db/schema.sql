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
  id INT NOT NULL AUTO_INCREMENT,
  job_title VARCHAR(30) NOT NULL,
  salary DECIMAL(9,2) NOT NULL,
  department_id INT NOT NULL,
  PRIMARY KEY (id)
);

--table for employees
CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT,
  PRIMARY KEY (id)
);

