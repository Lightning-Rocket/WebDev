CREATE DATABASE digital_santa;
USE digital_santa;

CREATE TABLE user (
	uid int not null AUTO_INCREMENT, 
	fname varchar(225), 
	lname varchar(225), 
	email varchar(225), 
	phone varchar(225),
	PRIMARY KEY (uid)
);

CREATE TABLE feedback (
	fbid int not null AUTO_INCREMENT,
	uid integer,
	q1 tinyint,
	rating int,
	q3 varchar(225),
	comments varchar(225),
	PRIMARY KEY (fbid),
	CONSTRAINT uid FOREIGN KEY (uid)
	REFERENCES user(uid)
	ON DELETE CASCADE
	ON UPDATE CASCADE
);