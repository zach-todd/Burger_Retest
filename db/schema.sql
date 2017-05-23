CREATE DATABASE burger_db;

USE burger_db;

drop table burgers;

CREATE TABLE burgers(
id int auto_increment not null,
burger_name varchar(128),
devoured boolean,
PRIMARY KEY(id)

);