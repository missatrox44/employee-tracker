-- DROP DATABASE IF EXISTS employee_tracker_db;

CREATE DATABASE employee_tracker_db;

USE employee_tracker_db;

CREATE TABLE departments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30)
);
  

CREATE TABLE roles (
  id INT AUTO_INCREMENT PRIMARY KEY, 
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT,
  INDEX dep_ind (department_id),
  CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES departments(id)
  ON DELETE CASCADE
);

CREATE TABLE employees (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
  INDEX role_ind (role_id),
  -- manager_id INT,
  CONSTRAINT fk_role FOREIGN KEY(role_id) REFERENCES roles(id)
  ON DELETE CASCADE
);