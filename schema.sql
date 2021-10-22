DROP DATABASE IF EXISTS schedules;
CREATE DATABASE schedules;

USE schedules

CREATE TABLE IF EXISTS pickups (
  id INT NOT NULL AUTO_INCREMENT,
  location_name varchar (100) NOT NULL,
  address varchar(150) NOT NULL,
  date_scheduled DATETIME,
  notes varchar(600),
  status INT NOT NULL
)

CREATE TABLE IF EXISTS users (
  id INT NOT NULL AUTO_INCREMENT,
  email varchar (100) NOT NULL,
  first_name varchar(50) NOT NULL,
  last_name varchar(50) NOT NULL,
  company varchar(150) NOT NULL,
)