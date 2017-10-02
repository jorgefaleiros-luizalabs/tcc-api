'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('tb_report_results', {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      reportId: {
        field: 'report_id',
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: 'tb_reports',
          key: 'id'
        },
        onDelete: 'cascade'
      },
      result: {
        field: 'result',
        type: Sequelize.FLOAT(2,2),
        allowNull: false,
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
    return queryInterface.dropTable('tb_report_results');
  }
};
