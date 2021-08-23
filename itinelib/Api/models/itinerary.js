'use strict';
const {
  Model, STRING
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class itinerary extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      itinerary.hasMany(models.Waypoints,{
        foreignKey: 'itineraryId',
        as: 'Waypoints',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  };
  itinerary.init({
    userId: DataTypes.INTEGER,
    depart: DataTypes.STRING,
    arriver: DataTypes.STRING,
    ville: DataTypes.STRING,
    region: DataTypes.STRING,
    transport: DataTypes.STRING

  }, {
    sequelize,
    modelName: 'itinerary',
  });
  return itinerary;
};