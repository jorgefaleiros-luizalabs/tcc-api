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
      field: 'medic',
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    nausea: {
      field: 'nausea',
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    dizziness: {
      field: 'dizziness',
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    skinMark: {
      field: 'skin_mark',
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    diagnostic: {
      field: 'diagnostic',
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    disease: {
      field: 'disease',
      type: DataTypes.STRING(45),
      allowNull: true
    },
    startDate: {
      field: 'start_date',
      type: DataTypes.DATE,
      allowNull: false
    },
    endDate: {
      field: 'end_date',
      type: DataTypes.DATE,
      allowNull: false
    },
    latitude: {
      field: 'latitude',
      type: DataTypes.FLOAT(11, 8)
    },
    longitude: {
      field: 'longitude',
      type: DataTypes.FLOAT(11, 8)
    },
    createdAt: {
      field: 'created_at',
      type: DataTypes.DATE
    },
    updatedAt: {
      field: 'updated_at',
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
