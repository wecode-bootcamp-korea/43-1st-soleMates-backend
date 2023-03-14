const dataSource = require("./dataSource");

const ALLproductList = async () => {
  return await dataSource.query(`SELECT * FROM products`);
};

const productList = async (categoryname, size, color) => {
  let categorycondition = "";
  categorycondition = "cate.name =" + categoryname;
  console.log(categorycondition);

  if (categoryname) size = size.split(",");
  let sizecondition = "";
  let sizemult = size[0];
  if (size.length > 1) {
    for (let i = 1; i < size.length; i++) {
      sizemult += "," + size[i];
    }
  } else {
    sizecondition = "s.name IN (" + size[0] + ")";
  }
  sizecondition = "s.name IN (" + sizemult + ")";

  color = color.split(",");
  let colorcondition = "";
  let colormult = color[0];
  if (color.length > 1) {
    for (let i = 1; i < color.length; i++) {
      colormult += "," + color[i];
    }
  } else {
    colorcondition = "c.name IN (" + color[0] + ")";
  }
  colorcondition = "c.name IN (" + colormult + ")";

  let categoryAndCondition = "";
  if (size || color) {
    categoryAndCondition = " AND ";
  }

  let andCondition = "";
  if (size && color) {
    andCondition = " AND ";
  }

  return await dataSource.query(
    `SELECT DISTINCT(p.id), p.name, p.price, pi.image_url as image_url, cate.name as categories
        FROM products p
        LEFT JOIN product_images pi ON pi.product_id = p.id
        LEFT JOIN product_categories pcate ON pcate.product_id = p.id
        LEFT JOIN categories cate ON cate.id = pcate.category_id
        LEFT JOIN product_sizes ps ON ps.product_id = p.id
        LEFT JOIN sizes s ON s.id = ps.size_id
        LEFT JOIN product_colors pc ON pc.product_id = p.id
        LEFT JOIN colors c ON c.id = pc.color_id
        WHERE
        ${categorycondition}
        ${categoryAndCondition}
        ${sizecondition}
        ${andCondition}
        ${colorcondition}
        GROUP BY p.id, p.name, p.price, s.name, pi.image_url, cate.name;
        `
  );
};

module.exports = {
  ALLproductList,
  productList,
};
