-- migrate:up
CREATE TABLE carts(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity int UNSIGNED NOT NULL,
    price DECIMAL(12, [4]) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT carts_user_id_fkey FOREIGN KEY (user_id) REFERENCES users(id),
    CONSTRAINT carts_product_id_fkey FOREIGN KEY (product_id) REFERENCES products(id)
);
-- migrate:down
DROP TABLE carts;