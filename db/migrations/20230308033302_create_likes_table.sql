-- migrate:up
CREATE TABLE likes(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    product_id INT NOT NULL,
    CONSTRAINT likes_user_id_fkey FOREIGN KEY (user_id) REFERENCES users(id),
    CONSTRAINT likes_product_id_fkey FOREIGN KEY (product_id) REFERENCES products(id),
    CONSTRAINT likes_only UNIQUE (user_id, product_id)
);
-- migrate:down
DROP TABLE likes;