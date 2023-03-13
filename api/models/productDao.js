const dataSource = require("./dataSource");

const productList = async (categoryId, size, color) => {
  return await dataSource.query(
    `SELECT
            p.name as product_name,
            p.price as product_price,
            pi.image_url as product_image,
            l.id as product_likes
        FROM products as p
        LEFT JOIN likes as l ON p.id = l.product_id
        LEFT JOIN product_images as pi ON p.id = pi.product_id
        `
  );
};

module.exports = {
  productList,
};
