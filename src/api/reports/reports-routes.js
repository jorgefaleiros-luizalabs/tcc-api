'use strict';

import Controller from './reports-controller';
import * as Validator from './reports-schema';

exports.register = (server, options, next) => {
  const controller = new Controller();

  server.bind(controller);

  server.route([{
    method: 'GET',
    path: '/report',
    handler: controller.list,
    config: {
      description: 'List reportss',
      tags: ['api'],
      validate: Validator.list()
    }
  }, {
    method: 'POST',
    path: '/report',
    handler: controller.create,
    config: {
      description: 'Create reports',
      tags: ['api'],
      validate: Validator.create()
    }
  }, {
    method: 'GET',
    path: '/report/{id}',
    handler: controller.read,
    config: {
      description: 'Read reports by ID',
      tags: ['api'],
      validate: Validator.read()
    }
  }]);

  next();
};

exports.register.attributes = {
  name: 'reportss-route',
  version: '1.0.0'
};
