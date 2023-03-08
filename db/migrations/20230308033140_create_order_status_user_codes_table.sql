-- migrate:up
CREATE TABLE order_status_user_codes(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name varchar(30) NOT NULL
);
-- migrate:down
DROP TABLE order_status_user_codes;