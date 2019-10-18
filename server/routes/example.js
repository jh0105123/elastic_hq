export default function (server) {

  server.route({
    path: '/api/ElasticHQ/example',
    method: 'GET',
    handler() {
      return { time: (new Date()).toISOString() };
    }
  });

}
