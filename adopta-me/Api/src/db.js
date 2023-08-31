require('dotenv').config()

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`);

module.exports = {
  conn: sequelize
}