-- migrate:up
CREATE TABLE colors(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name varchar(20) NOT NULL
);
-- migrate:down
DROP TABLE colors;