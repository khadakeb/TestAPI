CREATE DATABASE testdb;

USE testdb;

SHOW TABLES;


CREATE TABLE user(
	user_id INTEGER NOT NULL AUTO_INCREMENT,
	name VARCHAR(255) NOT NULL,
	lname VARCHAR(255) DEFAULT NULL,
	mname VARCHAR(255) NOT NULL,
	gender VARCHAR(255) NOT NULL,
	address1 VARCHAR(255) NOT NULL,
	address2 VARCHAR(255) NOT NULL,
	city VARCHAR(255) DEFAULT NULL,
	country VARCHAR(255) DEFAULT NULL,
	email VARCHAR(255) DEFAULT NULL,
	created_by VARCHAR(255) NOT NULL,
	created_date DATE NOT NULL,
	modified_by VARCHAR(255) DEFAULT NULL,
	modified_date DATE DEFAULT NULL,
	PRIMARY KEY (user_id)
);

INSERT INTO user VALUES(1, 'Test', 'User', '', 'Male', 'Rose icon', 'Pimple Saudagar', 'Pune', 'India', 'abc@abc.com',  'admin', '2019/02/26', NULL, NULL);
