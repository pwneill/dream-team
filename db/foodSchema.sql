USE lagerHead_db;

DROP TABLE IF EXISTS food;


CREATE TABLE food (
id int auto_increment primary key,
brewery_name text not null, 
food1_name text not null,
food1_description text not null,
food1_url text not null,
food1_delivers text,
food1_latitude text,
food1_longitude text,
food2_name text not null,
food2_description text not null,
food2_url text not null,
food2_delivers text,
food2_latitude text,
food2_longitude text,
food3_name text,
food3_description text,
food3_url text,
food3_delivers text,
food3_latitude text,
food3_longitude text,
food4_name text,
food4_description text,
food4_url text,
food4_delivers text,
food4_latitude text,
food4_longitude text
)

SELECT * FROM food;

USE lagerHead_db;

DROP TABLE IF EXISTS food;


CREATE TABLE food (
id int auto_increment primary key,
brewery_name text not null, 
food1_name text not null,
food1_description text not null,
food1_url text not null,
food1_delivers text,
food1_latitude text,
food1_longitude text,
food2_name text not null,
food2_description text not null,
food2_url text not null,
food2_delivers text,
food2_latitude text,
food2_longitude text,
food3_name text,
food3_description text,
food3_url text,
food3_delivers text,
food3_latitude text,
food3_longitude text,
food4_name text,
food4_description text,
food4_url text,
food4_delivers text,
food4_latitude text,
food4_longitude text
);


ALTER TABLE food
ADD FOREIGN KEY (breweryID) REFERENCES brewery(id);

