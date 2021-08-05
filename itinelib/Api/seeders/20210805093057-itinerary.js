'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('itineraries',[
      {
        userId: 1,
        depart: 'Forêt de Saint-Germain En Laye',
        arriver: "Champs de Mars",
        ville: 'Paris',
        region: 'Ile-de-France',
        transport: 'Velo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        depart: 'Bois de boulogne',
        arriver: "Bois de Vincennes",
        ville: 'Paris',
        region: 'Ile-de-France',
        transport: 'Velo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('itineraries')
 
  }
};
