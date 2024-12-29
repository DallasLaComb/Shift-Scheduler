const { DataTypes } = require('sequelize')
const sequelize = require('./index') // Import the Sequelize instance

const HelloModel = sequelize.define('HelloModel', {
  message: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

module.exports = HelloModel
