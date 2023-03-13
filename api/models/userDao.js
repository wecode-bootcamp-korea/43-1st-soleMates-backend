const dataSource = require("./dataSource");

const createUser = async (email, password, name) => {
  try {
    return await dataSource.query(
      `INSERT INTO users(
        email,
        password,
        name
      ) VALUES (
        ?,
        ?,
        ?
        )`,
      [email, password, name]
    );
  } catch (error) {
    error.message;
    error.statusCode = 400;
    throw error;
  }
};

const checkSignedEmail = async (email) => {
  const [result] = await dataSource.query(
    `SELECT EXISTS(
      SELECT
        id
      FROM
        users
      WHERE
        email=?
        ) as signed`,
    [email]
  );
  return !!parseInt(result.signed);
};

const userPasswordByEmail = async (email) => {
  try {
    const [result] = await dataSource.query(
      `SELECT
        password
      FROM
        users
      WHERE
        email=?
      `,
      [email]
    );

    return result.password;
  } catch (error) {
    error.statusCode = 400;
    throw error;
  }
};

const userIdByEmail = async (email) => {
  try {
    const [result] = await dataSource.query(
      `SELECT
        id
      FROM
        users
      WHERE
        email=?
      `,
      [email]
    );
    return result.id;
  } catch (error) {
    error.statusCode = 400;
    throw error;
  }
};

module.exports = {
  createUser,
  checkSignedEmail,
  userPasswordByEmail,
  userIdByEmail,
};
