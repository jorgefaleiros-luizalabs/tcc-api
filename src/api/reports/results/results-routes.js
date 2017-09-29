'use strict';

import Controller from './results-controller';
import * as Validator from './results-schema';

exports.register = (server, options, next) => {
  const controller = new Controller();

  server.bind(controller);

  server.route([{
    method: 'GET',
    path: '/report/{id}/result',
    handler: controller.list,
    config: {
      description: 'List resultss',
      tags: ['api'],
      validate: Validator.list()
    }
  }, {
    method: 'POST',
    path: '/report/{id}/result',
    handler: controller.create,
    config: {
      description: 'Create results',
      tags: ['api'],
      validate: Validator.create()
    }
  }, {
    method: 'GET',
    path: '/report/result/{id}',
    handler: controller.read,
    config: {
      description: 'Read results by ID',
      tags: ['api'],
      validate: Validator.read()
    }
  }]);

  next();
};

exports.register.attributes = {
  name: 'resultss-route',
  version: '1.0.0'
};
