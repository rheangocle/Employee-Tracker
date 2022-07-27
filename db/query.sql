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

-- View employees by manager
SELECT m.id AS 'Manager ID', CONCAT(m.FIRST_NAME, ' ', m.LAST_NAME) AS 'Manager Name', rls.title as 'Manager Title', CONCAT(e.first_name, ' ', e.last_name) AS 'Employee Name', r.title AS 'Employee Role', d.name AS 'Department'
FROM employee m
join roles rls on m.ROLE_ID  = rls.id
JOIN employee e ON e.MANAGER_ID = m.id
JOIN roles r ON e.role_id = r.id
JOIN departments d ON r.department_id = d.id
ORDER BY m.FIRST_NAME;

-- View employees by department
SELECT d.name AS 'Department', CONCAT(e.first_name, ' ', e.last_name) AS 'Employee Name', r.title AS 'Employee Role'
FROM employee e
JOIN roles rls on e.role_id  = rls.id
JOIN roles r ON e.role_id = r.id
JOIN departments d ON r.department_id = d.id
ORDER BY d.name;

-- Update employee manager
UPDATE employee
SET manager_id = ?
WHERE id = ?
