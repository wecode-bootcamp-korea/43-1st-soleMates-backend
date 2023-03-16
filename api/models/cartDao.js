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

const getCart = async (userId) => {
  return dataSource.query(
    `SELECT
      c.user_id AS userId,
      u.name AS userName,
      c.id AS cartId,
      p.id AS productId,
      p.name AS productName,
      c.quantity AS quantity,
      c.price AS productPrice,
      pi.image_url AS productImage
    FROM carts AS c 
    JOIN products AS p ON c.product_id = p.id
    JOIN users AS u ON C.user_id = u.id
    LEFT JOIN product_images AS pi ON c.product_id = pi.product_id
    WHERE c.user_id = ?
    ORDER BY c.id DESC; 
    `,
    [userId]
  );
};

module.exports = {
  createCart,
  getCart,
};
