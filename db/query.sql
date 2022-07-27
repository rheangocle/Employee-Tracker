-- View departments
SELECT id AS 'Department ID', name AS 'Department'
FROM departments;

-- View roles
SELECT id AS 'Role ID', title AS 'Title', salary AS 'Salary', department_id AS 'Department ID'
FROM roles;

-- View employees
SELECT e.id AS 'Employee ID', e.first_name AS 'First Name', e.last_name AS 'Last Name', r.title AS 'Title', d.name AS 'Department', r.salary AS 'Salary', e.manager_id AS 'Manager ID', CONCAT(m.FIRST_NAME, ' ', m.LAST_NAME) AS 'Manager Name'
FROM employee e
LEFT JOIN employee m ON m.id = e.MANAGER_ID
LEFT JOIN roles r ON e.role_id = r.id
LEFT JOIN departments d ON r.department_id = d.id
ORDER BY d.name;

-- Add department
INSERT INTO departments (name)
VALUES (newDepartmentName);
-- get new department name from user

-- Add role
INSERT INTO roles (title, salary, department_id)
VALUES (newRole, salary, departmentId);

-- Add employee
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES (firstName, lastName, roleId, manager_id);

DELETE FROM departments WHERE id >= 1;
SELECT * FROM departments;

-- view number of employees in each department
SELECT employee, COUNT(id) as number_of_employees
FROM 

