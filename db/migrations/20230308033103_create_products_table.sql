-- migrate:up
CREATE TABLE products(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    price DECIMAL(12, 4) NOT NULL,
    name VARCHAR(200) NOT NULL,
    quantity int UNSIGNED NULL,
    description text NULL
);
-- migrate:down
DROP TABLE products;