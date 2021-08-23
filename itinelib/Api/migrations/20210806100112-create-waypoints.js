'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Waypoints', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      itineraryId: {
        type: Sequelize.INTEGER,
        references: {model: 'itineraries', key:'id'},
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      coordonnesLatD: {
        type: Sequelize.DECIMAL(10,2)
      },
      coordonnesLongD: {
        type: Sequelize.DECIMAL(10,2)
      },
      coordonnesLatA: {
        type: Sequelize.DECIMAL(10,2)
      },
      coordonnesLongA: {
        type: Sequelize.DECIMAL(10,2)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Waypoints');
  }
};