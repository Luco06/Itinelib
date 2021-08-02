'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        id: 1,
        lastname: 'Dupont',
        firstname: 'Martin',
        email: 'mdupont@dev.fr',
        password: 'mdupont',
        age: 35,
        city: 'Nanterre',
        preferences: 'Quad',
        createdAt: new Date(),
        updatedAt: new Date()
       },
      {
        id: 2,
        lastname: 'Escobar',
        firstname: 'Pablo',
        email: 'pescobar@dev.fr',
        password: 'pescobar',
        age: 55,
        city: 'Medellin',
        preferences: 'Vélo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
