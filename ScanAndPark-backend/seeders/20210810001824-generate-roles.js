'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('roles', [{
      name: 'ADMIN',
      createdAt: Sequelize.fn('NOW'),
      updatedAt: Sequelize.fn('NOW')
    }, {
      name: 'USER',
      createdAt: Sequelize.fn('NOW'),
      updatedAt: Sequelize.fn('NOW')
    }, {
      name: 'RESIDENTIAL',
      createdAt: Sequelize.fn('NOW'),
      updatedAt: Sequelize.fn('NOW')
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('roles', null, {});
  }
};
