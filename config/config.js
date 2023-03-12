require('dotenv').config();

module.exports = {
  development: {
    database: "token_huntr_development",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  test: {
    database: "token_huntr_test",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  production: {
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    host: process.env.PGHOST,
    dialect: "postgres"
  }
}