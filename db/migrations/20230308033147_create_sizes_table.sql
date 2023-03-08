-- migrate:up
CREATE TABLE sizes(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name INT NOT NULL
);
-- migrate:down
DROP TABLE sizes;