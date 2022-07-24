-- Drops the employee_db if it exists currently --
DROP DATABASE IF EXISTS employee_db;
-- Creates the emplooyee_db database --
CREATE DATABASE employee_db;

-- use employee_db database --
USE employee_db;

-- Table for departments
CREATE TABLE departments (
  id INT PRIMARY KEY,
  name VARCHAR(30) NOT NULL,

);

-- table for roles
CREATE TABLE roles (
  id INT PRIMARY KEY,
  job_title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT NOT NULL,
);

--table for employees
CREATE TABLE employee (
  id INT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT,
);

