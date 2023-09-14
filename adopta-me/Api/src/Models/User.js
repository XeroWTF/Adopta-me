
const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  const User = sequelize.define('user', {
      name: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: true
          }
      },
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true
        }
      },
      nickname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      picture: {
        type: DataTypes.TEXT,
        allowNull: true,
      }
    },
    {
      timestamps: false,
    })

    return User
}