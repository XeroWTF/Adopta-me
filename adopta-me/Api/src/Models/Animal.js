
const { DataTypes } = require('sequelize');

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
    
    picture: {
      type: DataTypes.TEXT,
      allowNull: true
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