require('dotenv').config()
module.exports = {
  development: {
    database: "token_huntr_development",
    dialect: "postgres"
  },
  test: {
    database: "token_huntr_test",
    dialect: "postgres"
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}