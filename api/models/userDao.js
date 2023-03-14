const dataSource = require("./dataSource");

const createUser = async (email, password, name) => {
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

const getUserByEmail = async (email) => {
  const [result] = await dataSource.query(
    `SELECT
        id,
        password,
        name
      FROM
        users
      WHERE
        email=?
      `,
    [email]
  );
  return result;
};

const checkSignedUserId = async (userId) => {
  const [result] = await dataSource.query(
    `SELECT EXISTS(
      SELECT
        id
      FROM
        users
      WHERE
        id=?
    ) as signed`,
    [userId]
  );
  return !!parseInt(result.signed);
};

module.exports = {
  createUser,
  checkSignedEmail,
  getUserByEmail,
  checkSignedUserId,
};
