'use strict';

// load environment configurations
import Config from './environment';
import Hapi from 'hapi';

// load plugins
import ResponseTime from 'hapi-response-time';
import { Documentation, Routes, LogManager } from 'luizalabs-nodejs-commons-hapi';

if (Config.useNewRelic) {
  require('newrelic');
}

// instantiate a new server
const Server = new Hapi.Server();

// set the port for listening
Server.connection({
  host: Config.host,
  port: Config.port,
  routes: {
    cors: true,
    validate: {
      options: {
        abortEarly: false
      }
    },
    timeout: Config.env === 'production' || Config.env === 'stage' ? { server: Config.routesTimeout } : undefined
  }
});

const plugins = [
  { register: ResponseTime },
  {
    register: Documentation,
    options: {
      config: Config,
      tags: {
        'tcc-api': 'My awesome API'
      },
      info: {
        title: 'tcc-api',
        description: 'Powered by node, hapi, joi, hapi-swaggered, hapi-swaggered-ui and swagger-ui',
        version: '1.0.0'
      },
      title: 'tcc-api'
    }
  },
  { register: Routes, options: { config: Config } }
];

if (process.env.NODE_ENV === 'development') {
  plugins.push({ register: require('blipp') });
}

if (process.env.NODE_ENV !== 'test') {
  plugins.push({ register: LogManager,
    options: {
      sentryDSN: Config.log.sentry.dsn,
      apiVersion: Config.projectVersion,
      loggerName: 'tcc-api',
      appName: 'tcc-api',
      burzum: Config.log.burzum
    }});
}

Server.register(plugins, (err) => {
  if (err) {
    throw err;
  }

  if (!module.parent) {
    Server.start((err) => {
      if (err) {
        throw err;
      }

      Server.log('info', 'Server running at: ' + Server.info.uri);
    });
  }
});

export default Server;
