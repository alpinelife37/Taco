DROP DATABASE IF EXISTS taco_db;

CREATE database taco_db;

USE taco_db;

CREATE TABLE taco (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    taco_name VARCHAR (50) NOT NULL,
    devoured BOOLEAN DEFAULT false
);