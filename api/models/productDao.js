const dataSource = require("./dataSource");

const productList = async (categoryId, size, color) => {
  return await dataSource.query(
    `SELECT
            p.name AS product_name,
            p.price AS product_price,
            pi.image_url AS product_image
        FROM products AS p
        LEFT JOIN product_images AS pi ON p.id = pi.product_id
        `
  );
};

module.exports = {
  productList,
};
