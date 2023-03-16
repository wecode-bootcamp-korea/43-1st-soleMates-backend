const dataSource = require("./dataSource");

const getReviewList = async (productId) => {
  return dataSource.query(
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
    JOIN
        users AS u ON u.id = pr.user_id
    LEFT JOIN
        product_review_images AS pri ON pri.id = pr.image_id
    WHERE
        product_id = ?
        `,
    [productId]
  );
};

const checkOrderId = async (userId, productId) => {
  const [result] = await dataSource.query(
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

  return result;
};

const createReview = async (userId, productId, comment, rating, orderId) => {
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
            ?  
      )
        `,
    [userId, productId, comment, rating, orderId]
  );
};

module.exports = {
  getReviewList,
  createReview,
  checkOrderId,
};
