USE lagerHead_db;

DROP TABLE IF EXISTS beer;

CREATE TABLE beer (
id INT AUTO_INCREMENT PRIMARY KEY,
brewery_name text,
brewery_beer text,
desc text,
type varchar(255),
abv float,
ibu float
)

SELECT * FROM beer;

/* The INNER JOIN Query */

SELECT brewery_beer, brewery_name FROM beer INNER JOIN brewery ON beer.breweryID = brewery.breweryID;