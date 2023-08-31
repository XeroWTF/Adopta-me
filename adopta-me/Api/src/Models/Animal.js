const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('animal', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
          },

          picture: {
            type: DataTypes.TEXT,
            allowNull: true,
          }
        },
        {
          timestamps: false,
        })
      }