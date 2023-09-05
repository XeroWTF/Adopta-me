// db.js

require('dotenv').config();

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`
);

// Importar modelos
const User = require('./models/User'); 
const Animal = require('./models/Animal');

// Relaciones
User.hasMany(Animal);
Animal.belongsTo(User);

// Sincronización 
sequelize.sync()
  .then(() => console.log('Tablas sincronizadas'))
  .catch(error => console.error('Error al sincronizar:', error))

// Inyectar la conexión  
User.initialize(sequelize);
Animal.initialize(sequelize);

module.exports = sequelize;