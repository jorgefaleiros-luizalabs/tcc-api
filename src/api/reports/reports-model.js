'use strict';

export default function (sequelize, DataTypes) {
  const Reports = sequelize.define('reports', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    age: {
      field: 'age',
      type: DataTypes.INTEGER(2)
    },
    medic: {
      field: 'site_id',
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    nausea: {
      field: 'zipcode_initial',
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    dizziness: {
      field: 'zipcode_final',
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    skinMark: {
      field: 'created_user',
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    diagnostic: {
      field: 'created_user',
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    disease: {
      field: 'created_user',
      type: DataTypes.STRING(45),
      allowNull: false
    },
    startDate: {
      field: 'created_user',
      type: DataTypes.DATE,
      allowNull: false
    },
    endDate: {
      field: 'created_user',
      type: DataTypes.DATE,
      allowNull: false
    },
    createdAt: {
      field: 'created_at',
      type: DataTypes.DATE
    }
  }, {
    classMethods: {
      associate: function (models) {
      }
    },
    tableName: 'tb_reports',
    freezeTableName: true,
    timestamps: true
  });
  return Reports;
}
