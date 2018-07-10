'use strict'
module.exports = (sequelize, DataTypes) => {
  var Items = sequelize.define('Items', {
    value: DataTypes.STRING,
    complete: DataTypes.BOOLEAN,
    openId: DataTypes.STRING
  }, {})
  Items.associate = function() {
    // associations can be defined here
  }
  return Items
}