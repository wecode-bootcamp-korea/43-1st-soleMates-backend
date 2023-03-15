const dataSource = require("./dataSource");

const allProductList = async () => {
  return await dataSource.query(`
  SELECT DISTINCT
     (p.id), 
     p.name, 
     p.price, 
     pi.image_url as image_url,
  FROM 
     products as p
  LEFT JOIN 
     product_images pi ON pi.product_id = p.id
  `);
};

const productList = async (categoryname, size, color) => {
  let categorycondition = "";
  if (categoryname) {
    categorycondition = "cate.name =" + categoryname;
  }

  let categoryAndCondition = "";
  if (size || color) {
    categoryAndCondition = " AND ";
  }

  let andCondition = "";
  if (size && color) {
    andCondition = " AND ";
  }

  let sizecondition = "";
  if (size) {
    size = size.split(",");
    let sizemult = size[0];
    if (size.length > 1) {
      for (let i = 1; i < size.length; i++) {
        sizemult += "," + size[i];
      }
    } else {
      sizecondition = "s.name IN (" + size[0] + ")";
    }
    sizecondition = "s.name IN (" + sizemult + ")";
  }

  let colorcondition = "";
  if (color) {
    color = color.split(",");
    let colormult = color[0];
    if (color.length > 1) {
      for (let i = 1; i < color.length; i++) {
        colormult += "," + color[i];
      }
    } else {
      colorcondition = "c.name IN (" + color[0] + ")";
    }
    colorcondition = "c.name IN (" + colormult + ")";
  }

  return await dataSource.query(
    `SELECT DISTINCT
       (p.id), 
       p.name, 
       p.price, 
       pi.image_url as image_url, 
       cate.name as categories
     FROM 
        products p
     LEFT JOIN 
        product_images pi ON pi.product_id = p.id
     LEFT JOIN 
        product_categories pcate ON pcate.product_id = p.id
     LEFT JOIN 
        categories cate ON cate.id = pcate.category_id
     LEFT JOIN 
        product_sizes ps ON ps.product_id = p.id
     LEFT JOIN 
        sizes s ON s.id = ps.size_i    
     LEFT JOIN 
        product_colors pc ON pc.product_id = p.id
     LEFT JOIN 
        colors c ON c.id = pc.color_id
     WHERE
        ${categorycondition}
        ${categoryAndCondition}
        ${sizecondition}
        ${andCondition}
        ${colorcondition}
     GROUP BY 
        p.id, 
        p.name, 
        p.price, 
        s.name, 
        pi.image_url, 
        cate.name;
        `
  );
};

const getProductDetailById = async (productId) => {
  const detailProduct = await dataSource.query(
    `SELECT 
       p.id, 
       p.name, 
       p.description, 
       p.price, 
       p.quantity, 
       p.description, 
       pi.images
     FROM 
       products p
     LEFT JOIN (
            SELECT 
              product_id, 
              JSON_ARRAYAGG(
                JSON_OBJECT(
                  'id', id, 
                  'url', image_url,
                  'name', name
                )
              ) AS images 
            FROM 
              product_images 
            GROUP BY 
              product_id
          ) AS pi ON pi.product_id = p.id
      WHERE p.id = ?
      `,
    [productId]
  );

  const detailSize = await dataSource.query(
    `SELECT 
       s.id, 
       s.name as size
     FROM 
       products p
     LEFT JOIN 
       product_sizes ps ON ps.product_id = p.id
     LEFT JOIN 
       sizes s ON s.id = ps.size_id
     WHERE 
       p.id = ?
     GROUP BY 
       p.id, 
       s.id, 
       s.name;`,
    [productId]
  );

  const detailColor = await dataSource.query(
    `SELECT 
       c.id, 
       c.name as color
     FROM 
       products p
     LEFT JOIN 
       product_colors pc ON pc.product_id = p.id
     LEFT JOIN 
       colors c ON c.id = pc.color_id
     WHERE 
       p.id = ?
     GROUP BY 
       p.id, 
       c.id, 
       c.name`,
    [productId]
  );
  detailProduct[0].size = detailSize;
  detailProduct[0].color = detailColor;

  return detailProduct;
};

module.exports = {
  allProductList,
  productList,
  getProductDetailById,
};
