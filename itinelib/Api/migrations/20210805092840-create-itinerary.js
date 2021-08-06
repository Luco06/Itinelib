'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('itineraries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {model: 'Users', key:'id'},
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      depart: {
        type: Sequelize.STRING
      },
      arriver: {
        type: Sequelize.STRING
      },
      ville: {
        type: Sequelize.STRING
      },
      region: {
        type: Sequelize.STRING
      },
      transport: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('itineraries');
  }
};