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
        field: 'medic',
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      nausea: {
        field: 'nausea',
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      dizziness: {
        field: 'dizziness',
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      skinMark: {
        field: 'skin_mark',
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      diagnostic: {
        field: 'diagnostic',
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      disease: {
        field: 'disease',
        type: Sequelize.STRING(45),
        allowNull: true
      },
      startDate: {
        field: 'start_date',
        type: Sequelize.DATE,
        allowNull: false
      },
      endDate: {
        field: 'end_date',
        type: Sequelize.DATE,
        allowNull: true
      },
      latitude: {
        field: 'latitude',
        type: Sequelize.FLOAT(11, 8)
      },
      longitude: {
        field: 'longitude',
        type: Sequelize.FLOAT(11, 8)
      },
      createdAt: {
        field: 'created_at',
        type: Sequelize.DATE
      },
      updatedAt: {
        field: 'updated_at',
        type: Sequelize.DATE
      }
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('tb_reports');
  }
};
