-- migrate:up
CREATE TABLE payments(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    cart_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity int NOT NULL,
    price DECIMAL(12, [4]) NOT NULL,
    order_status_user_code_id int NULL,
    order_status_product_code_id int NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT payments_cart_id_fkey FOREIGN KEY (cart_id) REFERENCES carts(id),
    CONSTRAINT payments_order_status_user_code_id_fkey FOREIGN KEY (order_status_user_code_id) REFERENCES order_status_user_codes(id),
    CONSTRAINT payments_order_status_product_code_id_fkey FOREIGN KEY (order_status_product_code_id) REFERENCES order_status_product_codes(id)
);
-- migrate:down

