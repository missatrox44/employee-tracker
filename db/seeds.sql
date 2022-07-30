INSERT INTO departments (name)
VALUES ("Sales"),
       ("Legal"),
       ("Finance"),
       ("Engineering");

INSERT INTO roles (title, salary, department_id)
VALUES ("Sales Lead", 100000, 1),
       ("Salesperson", 80000, 2),
       ("Lead Engineer", 150000, 4),
       ("Software Engineer", 120000, 4),
       ("Account Manager", 160000, 3),
       ("Accountant", 125000, 3),
       ("Legal Team Lead", 250000, 2),
       ("Lawyer", 190000, 2);


INSERT INTO employees (first_name, last_name, role_id)
VALUES ("Klaus", "Hargreeves", 1),
       ("Robert", "Sheehan", 2),
       ("Tom", "Hopper", 3),
       ("David", "Castaneda", 4),
       ("Emmy", "Lampman", 5),
       ("Genesis", "Rodriguez", 6),
       ("Aidan", "Gallagher", 7),
       ("Elliot", "Page", 8);
      
