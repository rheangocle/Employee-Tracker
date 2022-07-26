-- for inputting table values

INSERT INTO departments (name)
VALUES 
1("Engineering"),
2("Support"),
3("Accounting"),
4("Marketing"),
5("Human Resources"),
6("Sales");

INSERT INTO roles (id, title, salary, department_id)
VALUES
1("Computer Hardware Engineer", 110000, 1),
2("Entry Level Software Engineer", 50000, 1),
3("VP Accounting", 118570, 3),
4("Accountant", 60000, 3),
5("Desktop Support Technician", 40000, 2),
6("Financial Advisor", 101300, 3),
7("Human Resources Manager", 83853, 5),
8("Programmer Analyst I", 161000, 1),
9("Market Research Analyst", 65000, 4),
0("Marketing Manager", 135000, 4),
11("Public Relations Manager", 125000, 4),
12("IT Manager", 100000, 2),
13("Sales Manager", 132000, 6),
14("Sales Engineer", 95000, 6),
15("Senior Software Engineer", 200000, 1);


INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
1('Rafaelia', 'Myall', 1, null),
2('Annabela', 'Lymbourne', 2, 15),
3('Shaun', 'Flemmich', 3, null),
4('Annabela', 'Lymbourne', 4, 3),
5('Ailee', 'Garfield', 5, 12),
6('Julianna', 'Scapens', 6, 3),
7('Cybill', 'Padrick', 7, null),
8('Pam', 'Quiddington', 8, 15),
9('Geraldine', 'Lanmeid', 9, 10),
0('Reta', 'Ackenson', 10, null),
11('Seamus', 'MacNeilley', 11, null),
12('Noami', 'Reiner', 12, null),
13('Shea', 'Tavner', 13, null),
14('Sarene', 'Arnoll', 14, 13),
15('Davidson', 'Maty', 15, null),
16('Sebastiano', 'Babington', 2, 15),
17('Nickolaus', 'Tennison', 2, 15),
18('Leonora', 'Butler', 4, 3),
19('Merrielle', 'Tippetts', 8, 15),
20('Pedro', 'Tweedlie', 5, 12);
