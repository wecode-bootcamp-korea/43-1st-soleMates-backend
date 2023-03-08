-- migrate:up
CREATE TABLE product_reviews(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    product_id INT NOT NULL,
    order_id INT NOT NULL,
    image_id INT NULL,
    comment varchar(200)NOT NULL,
    rating INT NOT NULL,
    CONSTRAINT product_reviews_user_id_fkey FOREIGN KEY (user_id) REFERENCES users(id),
    CONSTRAINT product_reviews_product_id_fkey FOREIGN KEY (product_id) REFERENCES products(id),
    CONSTRAINT product_reviews_order_id_fkey FOREIGN KEY (order_id) REFERENCES payments(id)
);
-- migrate:down
DROP TABLE product_reviews;