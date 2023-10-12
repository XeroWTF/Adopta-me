
const { DataTypes } = require('sequelize');

const provinces = [
  'Buenos Aires',
  'Catamarca',
  'Chaco',
  'Chubut',
  'Córdoba',
  'Corrientes',
  'Entre Ríos',
  'Formosa',
  'Jujuy',
  'La Pampa',
  'La Rioja', 
  'Mendoza',
  'Misiones',
  'Neuquén',
  'Río Negro',
  'Salta',
  'San Juan', 
  'San Luis',
  'Santa Cruz',
  'Santa Fe',
  'Santiago del Estero',
  'Tierra del Fuego',
  'Tucumán' 
];

module.exports = (sequelize) => {

  const Animal = sequelize.define('Animal', {

    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    province: {
      type: DataTypes.ENUM,
      values: provinces,
      allowNull: false
    },

    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    
    image: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    
    status: {
      type: DataTypes.ENUM('En adopción', 'Adoptado'),  
      defaultValue: 'En adopción'
    }

  },
  {
    timestamps: false
  });
  
  return Animal;

}