'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('tb_reports', {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      age: {
        field: 'age',
        type: Sequelize.INTEGER(2)
      },
      medic: {
        field: 'site_id',
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      nausea: {
        field: 'zipcode_initial',
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      dizziness: {
        field: 'zipcode_final',
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      skinMark: {
        field: 'created_user',
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      diagnostic: {
        field: 'created_user',
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      disease: {
        field: 'created_user',
        type: Sequelize.STRING(45),
        allowNull: false
      },
      startDate: {
        field: 'created_user',
        type: Sequelize.DATE,
        allowNull: false
      },
      endDate: {
        field: 'created_user',
        type: Sequelize.DATE,
        allowNull: false
      },
      createdAt: {
        field: 'created_at',
        type: Sequelize.DATE
      }
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('tb_reports');
  }
};
