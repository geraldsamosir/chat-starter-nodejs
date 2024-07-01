const Sequelize = require("sequelize");

const db = new Sequelize(
  // `${process.env.DATABASE_URL}` || "postgres://localhost:5432/messenger",
  "messenger",
  "admin",
  "admin",
  {
    host: 'localhost',
    port: 5432,
    logging: false,
    dialect: 'postgres'
  },
);

module.exports = db;
