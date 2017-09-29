'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('user', [{
      id: 1,
      name: 'DENIS WILLIAM DE FREITAS SOUZA',
      active: true
    }, {
      id: 2,
      name: 'User 2',
      active: true
    }, {
      id: 3,
      name: 'User 3',
      active: true
    }, {
      id: 4,
      name: 'User 4',
      active: true
    }, {
      id: 5,
      name: 'WENDELL GOUVEIA RODRIGUES',
      active: true
    }]);
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('user', null, {});
  }
};
