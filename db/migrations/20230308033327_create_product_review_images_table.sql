-- migrate:up
CREATE TABLE product_review_images(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    image VARCHAR(1000)
);
-- migrate:down
DROP TABLE product_review_images;