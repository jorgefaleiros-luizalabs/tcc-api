'use strict';

import { sequelize } from '../../config/database';

const models = sequelize().models;
const analitics = models.analitics;

export default class AnaliticsDao {
  findAll (options) {
    return analitics.findAll({
      where: options.where,
      offset: options.paging.offset,
      limit: options.paging.limit
    });
  }

  create (obj) {
    return analitics.create(obj);
  }

  update (options) {
    return analitics.update(options.model, {
      where: options.where
    });
  }

  findOne (options) {
    return analitics.findOne(options);
  }

  byId (id, options) {
    return analitics.findOne({
      include: options.includes,
      where: {
        id: id
      }
    });
  }

  delete (id, options) {
    return analitics.destroy({
      force: options.force,
      where: {
        id: id
      }
    });
  }
}
