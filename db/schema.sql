DROP DATABASE IF EXISTS tacos_db;

CREATE database tacos_db;

USE tacos_db;

CREATE TABLE tacos (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    taco_name VARCHAR (50) NOT NULL,
    devoured BOOLEAN DEFAULT false
);