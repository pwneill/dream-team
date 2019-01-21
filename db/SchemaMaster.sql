USE lagerHead_db;

DROP TABLE IF EXISTS brewery;

CREATE TABLE brewery(
   brewery_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   brewery_name VARCHAR(255) NOT NULL,
   locationID INT NOT NULL,
   label TEXT,
   lat FLOAT,
   long FLOAT,
   food1_name VARCHAR(255),
   food1_description TEXT, 
   food1_url TEXT,
   food1_delivers BOOLEAN DEFAULT FALSE,
   food2_name VARCHAR(255),
   food2_description TEXT, 
   food2_url TEXT,
   food2_delivers BOOLEAN DEFAULT FALSE,
   food3_name VARCHAR(255),
   food3_description TEXT, 
   food3_url TEXT,
   food4_delivers BOOLEAN DEFAULT FALSE,
);

DROP TABLE IF EXISTS beer;
 
CREATE TABLE beer(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    brewery_name VARCHAR(255) AUTO_INCREMENT NOT NULL,
    brewery_id INT NOT NULL,
    description TEXT,
    beer_type VARCHAR(255),
    abv FLOAT NOT NULL,
    ibu FLOAT NOT NULL,
    FOREIGN KEY fk_brewery(brewery_id)
    REFERENCES brewery(brewery_id)
    );
