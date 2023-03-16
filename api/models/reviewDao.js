const dataSource = require("./dataSource");

const reviewList = async (productId) => {
  return await dataSource.query(
    `
    SELECT
        pr.id,
        u.name,
        pr.product_id,
        pr.comment,
        pr.rating,
        pri.image
    FROM
        product_reviews AS pr
    LEFT JOIN
        users AS u ON u.id = pr.user_id
    LEFT JOIN
        product_review_images AS pri ON pri.id = pr.image_id
    WHERE
        product_id = ?
        `,
    [productId]
  );
};

const createReview = async (userId, productId, comment, rating) => {
  const findOrderId = dataSource.query(
    `SELECT id
         FROM payments
         WHERE cart_id = (
                SELECT id
                FROM carts
                WHERE user_id = ? AND product_id = ?
                )
        `,
    [userId, productId]
  );

  return dataSource.query(
    `INSERT INTO 
        product_reviews(
            user_id,
            product_id,
            comment,
            rating,
            order_id
      ) VALUES (
            ?,
            ?,
            ?,
            ?,
            ${findOrderId}  
      )
        `,
    [userId, productId, comment, rating]
  );
};

module.exports = {
  reviewList,
  createReview,
};
