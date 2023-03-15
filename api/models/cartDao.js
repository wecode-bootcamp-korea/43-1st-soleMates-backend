const dataSource = require("./dataSource");

const createCart = async (userId, productId, quantity, price) => {
  return dataSource.query(
    `INSERT INTO carts(
      user_id,
      product_id,
      quantity,
      price
    ) VALUES (
      ?,
      ?,
      ?,
      ?
    ) ON DUPLICATE KEY UPDATE
      quantity = quantity + ?
      `,
    [userId, productId, quantity, price, quantity]
  );
};

const updateCart = async (userId, cartId, quantity, price) => {
  return dataSource.query(
    `UPDATE 
      carts
     SET
      quantity = ?,
      price = ?
     WHERE id = ?
    `,
    [quantity, price, cartId]
  );
};

module.exports = {
  createCart,
  updateCart,
};
