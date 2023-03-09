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

module.exports = {
  createUser,
  checkSignedEmail,
};
