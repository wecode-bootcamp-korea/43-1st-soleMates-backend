-- migrate:up
CREATE TABLE product_colors(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_id INT NOT NULL,
    color_id INT NOT NULL,
    CONSTRAINT product_colors_product_id_fkey FOREIGN KEY (product_id) REFERENCES products(id),
    CONSTRAINT product_colors_color_id_fkey FOREIGN KEY (color_id) REFERENCES colors(id)
);
-- migrate:down
DROP TABLE product_colors;