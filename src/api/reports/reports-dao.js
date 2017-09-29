'use strict';

import { sequelize } from '../../config/database';

const models = sequelize().models;
const reports = models.reports;

export default class ReportsDao {
  findAll (options) {
    return reports.findAll({
      where: options.where,
      offset: options.paging.offset,
      limit: options.paging.limit
    });
  }

  create (obj) {
    return reports.create(obj);
  }

  update (options) {
    return reports.update(options.model, {
      where: options.where
    });
  }

  findOne (options) {
    return reports.findOne(options);
  }

  byId (id, options) {
    return reports.findOne({
      include: options.includes,
      where: {
        id: id
      }
    });
  }

  delete (id, options) {
    return reports.destroy({
      force: options.force,
      where: {
        id: id
      }
    });
  }
}
