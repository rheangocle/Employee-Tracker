-- for inputting table values

INSERT INTO departments (id, name)
VALUES 
("Engineering"),
("Support"),
("Accounting"),
("Marketing"),
("Human Resources"),
("Sales");

INSERT INTO roles (title, salary, department_id)
VALUES
("Computer Hardware Engineer", 110000, 1),
("Entry Level Software Engineer", 50000, 1),
("VP Accounting", 118570, 3),
("Accountant", 60000, 3),
("Desktop Support Technician", 40000, 2),
("Financial Advisor", 101300, 3),
("Human Resources Manager", 83853, 5),
("Programmer Analyst I", 161000, 1),
("Market Research Analyst", 65000, 4),
("Marketing Manager", 135000, 4),
("Public Relations Manager", 125000, 4),
("IT Manager", 100000, 2),
("Sales Manager", 132000, 6),
("Sales Engineer", 95000, 6),
("Senior Software Engineer", 200000, 1);

-- Adding employee info
INSERT INTO employee (id, first_name, last_name)
VALUES
(1, "Rafaelia", "Myall"),
(2, "Annabela", "Lymbourne"),
(3, "Shaun", "Flemmich"),
(4, "Annabela", "Lymbourne"),
(5, "Ailee", "Garfield"),
(6, "Julianna", "Scapens"),
(7, "Cybill", "Padrick"),
(8, "Pam", "Quiddington"),
(9, "Geraldine", "Lanmeid"),
(10, "Reta", "Ackenson"),
(11, "Seamus", "MacNeilley"),
(12, "Noami", "Reiner"),
(13, "Shea", "Tavner"),
(14, "Sarene", "Arnoll"),
(15, "Davidson", "Maty"),
(16, "Sebastiano", "Babington"),
(17, "Nickolaus", "Tennison"),
(18, "Leonora", "Butler"),
(19, "Merrielle", "Tippetts"),
(20, "Pedro", "Tweedlie");

-- Then add the role_id and manager_id
UPDATE employee
SET 
  role_id = 1,
  manager_id = null
WHERE
  id = 1;

UPDATE employee
SET 
  role_id = 2,
  manager_id = 15
WHERE
  id = 2;
  UPDATE employee

SET 
  role_id = 3,
  manager_id = null
WHERE
  id = 3;

UPDATE employee
SET 
  role_id = 4,
  manager_id = 3
WHERE
  id = 4;

UPDATE employee
SET 
  role_id = 5,
  manager_id = 12
WHERE
  id = 5;

UPDATE employee
SET 
  role_id = 6,
  manager_id = 3
WHERE
  id = 6;

UPDATE employee
SET 
  role_id = 7,
  manager_id = NULL 
WHERE
  id = 7;

UPDATE employee
SET 
  role_id = 8,
  manager_id = 15 
WHERE
  id = 8;

UPDATE employee
SET 
  role_id = 9,
  manager_id = 10 
WHERE
  id = 9;

UPDATE employee
SET 
  role_id = 10,
  manager_id = NULL  
WHERE
  id = 10;

UPDATE employee
SET 
  role_id = 11,
  manager_id = NULL  
WHERE
  id = 11;

UPDATE employee
SET 
  role_id = 12,
  manager_id = NULL  
WHERE
  id = 12;

UPDATE employee
SET 
  role_id = 13,
  manager_id = NULL  
WHERE
  id = 13;

UPDATE employee
SET 
  role_id = 14,
  manager_id = 13  
WHERE
  id = 14;

UPDATE employee
SET 
  role_id = 15,
  manager_id = NULL  
WHERE
  id = 15;

UPDATE employee
SET 
  role_id = 2,
  manager_id = 15  
WHERE
  id = 16;

UPDATE employee
SET 
  role_id = 2,
  manager_id = 15  
WHERE
  id = 17;

UPDATE employee
SET 
  role_id = 4,
  manager_id = 3  
WHERE
  id = 18;

UPDATE employee
SET 
  role_id = 8,
  manager_id = 15  
WHERE
  id = 19;

UPDATE employee
SET 
  role_id = 5,
  manager_id = 12  
WHERE
  id = 20;
  
(1, "Rafaelia", "Myall", 1, null),
(2, "Annabela", "Lymbourne", 2, 15),
(3, "Shaun", "Flemmich", 3, null),
(4, "Annabela", "Lymbourne", 4, 3),
(5, "Ailee", "Garfield", 5, 12),
(6, "Julianna", "Scapens", 6, 3),
(7, "Cybill", "Padrick", 7, null),
(8, "Pam", "Quiddington", 8, 15),
(9, "Geraldine", "Lanmeid", 9, 10),
(10, "Reta", "Ackenson", 10, null),
(11, "Seamus", "MacNeilley", 11, null),
(12, "Noami", "Reiner", 12, null),
(13, "Shea", "Tavner", 13, null),
(14, "Sarene", "Arnoll", 14, 13),
(15, "Davidson", "Maty", 15, null),
(16, "Sebastiano", "Babington", 2, 15),
(17, "Nickolaus", "Tennison", 2, 15),
(18, "Leonora", "Butler", 4, 3),
(19, "Merrielle", "Tippetts", 8, 15),
(20, "Pedro", "Tweedlie", 5, 12);

