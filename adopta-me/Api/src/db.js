require('dotenv').config()

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`
);
const modelDefiners = [
    require('./models/User')
    ,
    require("./models/Animal")
  ]
  
  // Injectar la conexión a los modelos
  modelDefiners.forEach(model => model(sequelize));

module.exports = sequelize;