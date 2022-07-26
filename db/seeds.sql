-- for inputting table values

INSERT INTO departments (id, name)
VALUES 
("Engineering"),
("Support"),
("Accounting"),
("Marketing"),
("Human Resources"),
("Sales");

INSERT INTO roles (id, title, salary, department_id)
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


INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
('Rafaelia', 'Myall', 1, null),
('Annabela', 'Lymbourne', 2, 15),
('Shaun', 'Flemmich', 3, null),
('Annabela', 'Lymbourne', 4, 3),
('Ailee', 'Garfield', 5, 12),
('Julianna', 'Scapens', 6, 3),
('Cybill', 'Padrick', 7, null),
('Pam', 'Quiddington', 8, 15),
('Geraldine', 'Lanmeid', 9, 10),
('Reta', 'Ackenson', 10, null),
('Seamus', 'MacNeilley', 11, null),
('Noami', 'Reiner', 12, null),
('Shea', 'Tavner', 13, null),
('Sarene', 'Arnoll', 14, 13),
('Davidson', 'Maty', 15, null),
('Sebastiano', 'Babington', 2, 15),
('Nickolaus', 'Tennison', 2, 15),
('Leonora', 'Butler', 4, 3),
('Merrielle', 'Tippetts', 8, 15),
('Pedro', 'Tweedlie', 5, 12);

