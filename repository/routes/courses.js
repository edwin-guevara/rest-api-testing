const Joi = require('@hapi/joi');
module.exports = [];
const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });
    server.route({
        method: 'GET',
        path: '/courses/subject',
        handler: (request, h) => {
            return 'subject';
        }
    });
    server.route({
      method: 'GET',
      path: '/courses/credits/number',
      handler: (request, h) => {
        return 'number';
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
