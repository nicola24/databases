-- mysql -u student -p < server/schema.sql;
drop database chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE users(
  name varchar(255),
  ID int not null auto_increment,
  primary key (ID)
);

CREATE TABLE rooms(
  rooms varchar(255),
  ID int not null auto_increment,
  primary key (ID)
);


CREATE TABLE messages(
  message varchar(255),
  ID int not null auto_increment,
  primary key (ID)
);




/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u student < server/schema.sql
 *  to create the database and the tables.*/

