'use strict';

export default function (sequelize, DataTypes) {
  const Results = sequelize.define('results', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    reportId: {
      field: 'report_id',
      type: DataTypes.INTEGER(2),
      allowNull: false
    },
    result: {
      field: 'result',
      type: DataTypes.FLOAT(2, 2),
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function (models) {
      }
    },
    tableName: 'tb_report_results',
    freezeTableName: true,
    timestamps: true
  });
  return Results;
}
