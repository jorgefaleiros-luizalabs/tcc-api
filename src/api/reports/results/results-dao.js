'use strict';

import { sequelize } from '../../../config/database';

const models = sequelize().models;
const results = models.results;

export default class ResultsDao {
  findAll (options) {
    return results.findAll({
      where: options.where,
      offset: options.paging.offset,
      limit: options.paging.limit
    });
  }

  create (obj) {
    return results.create(obj);
  }

  update (options) {
    return results.update(options.model, {
      where: options.where
    });
  }

  findOne (options) {
    return results.findOne(options);
  }

  byId (id, options) {
    return results.findOne({
      include: options.includes,
      where: {
        id: id
      }
    });
  }

  delete (id, options) {
    return results.destroy({
      force: options.force,
      where: {
        id: id
      }
    });
  }
}
