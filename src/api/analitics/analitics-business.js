'use strict';

import {BaseBusiness} from 'luizalabs-nodejs-commons';
import AnaliticsDao from './analitics-dao';

export default class AnaliticsBusiness extends BaseBusiness {
  constructor () {
    super();
    this._dao = new AnaliticsDao();
  }

  findAll (options) {
    let where = {};
    return this._dao.findAll({
      paging: {
        limit: options.query.limit,
        offset: options.query.offset
      },
      where: where
    })
      .then(super.notFound('Analiticss'))
      .then(result => result);
  }

  create (options) {
    let obj = options.payload;

    return this._dao.create(obj);
  }

  byId (options) {
    let id = options.params.id;
    return this._dao.byId(id, options)
      .then(super.notFound('Analitics'));
  }

  update (options) {
    let id = options.params.id;
    let obj = options.payload;

    return this._dao.byId(id)
      .then(super.notFound('Analitics'))
      .then(() => {
        return this._dao.update({
          model: obj,
          where: {
            id: id
          }
        });
      })
      .then(() => this._dao.byId(id));
  }

  delete (options) {
    let id = options.params.id;
    return this._dao.byId(id)
      .then(super.notFound('Analitics'))
      .then(() => this._dao.delete(id, options));
  }
}
