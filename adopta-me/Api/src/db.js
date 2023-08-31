require('dotenv').config()

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`);

const modelDefiners = [
    require('./Models/User'),
    // otros modelos
  ]
  
  // Injectar la conexión a los modelos
  modelDefiners.forEach(model => model(sequelize));

module.exports = sequelize;