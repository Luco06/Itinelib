'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Waypoints',[
      {
        itineraryId: 1,
        coordonnesLatD: 48.937835693359375,
        coordonnesLongD:  2.0946121215820312,
        coordonnesLatA: 48.8640928,
        coordonnesLongA:  2.2482579,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        itineraryId: 2,
        coordonnesLatD: 53.339688,
        coordonnesLongD: -6.236688,
        coordonnesLatA: 48.831622,
        coordonnesLongA:   2.4342379,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Waypoints')
    
  }
};
