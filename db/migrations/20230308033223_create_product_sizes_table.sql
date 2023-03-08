-- migrate:up
CREATE TABLE product_sizes(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_id INT NOT NULL,
    size_id int NOT NULL,
    CONSTRAINT product_sizes_product_id_fkey FOREIGN KEY (product_id) REFERENCES products(id),
    CONSTRAINT product_sizes_size_id_fkey FOREIGN KEY (size_id) REFERENCES sizes(id)
);
-- migrate:down
DROP TABLE product_sizes;