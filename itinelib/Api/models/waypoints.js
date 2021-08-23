'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Waypoints extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Waypoints.init({
    itineraryId: DataTypes.INTEGER,
    coordonnesLatD: DataTypes.DECIMAL,
    coordonnesLongD: DataTypes.DECIMAL,
    coordonnesLatA: DataTypes.DECIMAL,
    coordonnesLongA: DataTypes.DECIMAL,
  }, {
    sequelize,
    modelName: 'Waypoints',
  });
  return Waypoints;
};