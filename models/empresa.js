'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class empresa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.usuario, {as: "usuarios"})
    }
  }
  empresa.init({
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'empresa',
  });
  return empresa;
};