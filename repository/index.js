'use strict';
const Hapi = require('@hapi/hapi');
const Joi = require('@hapi/joi');
const path = require('path');
const fs = require('fs');
const routes = [];
const routesPath = path.join(__dirname, 'routes');
const fileNames = fs.readdirSync('./routes');
fileNames.forEach(routesPath.join())
const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost'
  });
  server.route({
    method: 'routes',
    path: '/',
    handler: (request, h) => {
      return 'Hello World!';
    }
  });
  await server.start();
  console.log('Server running on %s', server.info.uri);
};
process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});
init();
