-- migrate:up
CREATE TABLE order_item_status(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name varchar(30) NOT NULL
);
-- migrate:down
DROP TABLE order_item_status;