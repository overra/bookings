const createPool = require("mysql2/promise").createPool;
const path = require("path");

/* If using `yarn start` rather than `now`/`now dev`, use load .env manually */
if (!process.env.NOW_REGION) {
  require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
}

const db = createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_NAME
});

module.exports.query = async function(...args) {
  let connection = await db.getConnection();
  connection.connection.config.namedPlaceholders = true;
  const results = await connection.execute(...args);
  connection.release();
  return results;
};
