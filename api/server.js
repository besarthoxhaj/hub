'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();

server.connection({
  port: Number(process.env.PORT) || 2222,
  routes: {
    cors: {
      origin: ['*']
    }
  }
});

server.register([
  require('inert'),
], err => {
  if (err) {
    console.log('Failed to load inert');
    throw err;
  }

  server.route(require('./routes.js'));
});

module.exports = server;
