USE lagerHead_db;

DROP TABLE IF EXISTS brewery;

CREATE TABLE brewery(
id int auto_increment primary key,
Name text,
label text,
latitude float,
longitude float
);

SELECT * FROM brewery;