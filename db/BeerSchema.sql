USE lagerHead_db;

DROP TABLE IF EXISTS beer;

CREATE TABLE beer (
id INT AUTO_INCREMENT PRIMARY KEY,
brewery_name text,
brewery_beer text
)

SELECT * FROM beer;

ALTER TABLE beer
ADD FOREIGN KEY (breweryID) REFERENCES brewery(id);