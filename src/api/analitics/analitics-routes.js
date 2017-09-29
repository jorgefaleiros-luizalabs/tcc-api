'use strict';

import Controller from './analitics-controller';
import * as Validator from './analitics-schema';

exports.register = (server, options, next) => {
  const controller = new Controller();

  server.bind(controller);

  server.route([{
    method: 'GET',
    path: '/analitic',
    handler: controller.list,
    config: {
      description: 'List analiticss',
      tags: ['api'],
      validate: Validator.list()
    }
  }, {
    method: 'POST',
    path: '/analitic',
    handler: controller.create,
    config: {
      description: 'Create analitics',
      tags: ['api'],
      validate: Validator.create()
    }
  }, {
    method: 'GET',
    path: '/analitic/{id}',
    handler: controller.read,
    config: {
      description: 'Read analitics by ID',
      tags: ['api'],
      validate: Validator.read()
    }
  }, {
    method: 'PUT',
    path: '/analitic/{id}',
    handler: controller.update,
    config: {
      description: 'Update analitics by ID',
      tags: ['api'],
      validate: Validator.update()
    }
  }, {
    method: 'DELETE',
    path: '/analitic/{id}',
    handler: controller.remove,
    config: {
      description: 'Delete analitics by ID',
      tags: ['api'],
      validate: Validator.remove()
    }
  }]);

  next();
};

exports.register.attributes = {
  name: 'analiticss-route',
  version: '1.0.0'
};
