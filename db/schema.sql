DROP DATABASE IF EXISTS taco_tracker;

CREATE database taco_tracker;

USE taco_tracker;

CREATE TABLE taco (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    taco_name VARCHAR (30) NOT NULL,
    devoured BOOLEAN
);