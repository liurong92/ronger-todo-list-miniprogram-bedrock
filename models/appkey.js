'use strict'
module.exports = (sequelize, DataTypes) => {
  var AppKey = sequelize.define('AppKey', {
    appId: DataTypes.STRING,
    secretId: DataTypes.STRING
  }, {})
  AppKey.associate = function () {
  }
  return AppKey
}