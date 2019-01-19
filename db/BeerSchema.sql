USE lagerHead_db;

DROP TABLE IF EXISTS beer;

CREATE TABLE beer (
id INT AUTO_INCREMENT PRIMARY KEY,
brewery_name text,
brewery_beer text
)

SELECT * FROM beer;

/* The INNER JOIN Query */

USE LagerHead_db;
SELECT beers.Beer_Name, beers.Brewery_Name 
FROM beers
INNER JOIN brewery
ON brewery.Brewery_Name = beers.Brewery_Name;