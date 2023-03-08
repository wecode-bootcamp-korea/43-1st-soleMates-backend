-- migrate:up
CREATE TABLE product_review_likes(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    product_review_id INT NOT NULL,
    CONSTRAINT product_review_likes_user_id_fkey FOREIGN KEY (user_id) REFERENCES users(id),
    CONSTRAINT product_review_likes_product_review_id_fkey FOREIGN KEY (product_review_id) REFERENCES product_reviews(id),
    CONSTRAINT review_likes_only UNIQUE (user_id, product_review_id)
);
-- migrate:down
DROP TABLE product_review_likes;