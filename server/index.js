'use strict';

const Hapi = require('hapi');
const Good = require('good');
const Path = require('path');
const Inert = require('inert');

//INITIALIZE OUR SERVER
const server = new Hapi.Server({
    connections: {
        routes: {
            files: {
                relativeTo: Path.join(__dirname, '../client')
            }
        }
    }
});

server.connection({ port: 8080 });

//DEFINE ROUTES
server.route({
    method: 'GET',
    path: '/{path*}',
    handler: (request, reply) => {
        reply.file('index.html');
    }
});

//REGISTER PLUGINS
server.register(Inert, () => {});
server.register({
    register: Good,
    options: {
        reporters: {
            console: [{
                module: 'good-squeeze',
                name: 'Squeeze',
                args: [{
                    response: '*',
                    log: '*'
                }]
            }, {
                module: 'good-console'
            }, 'stdout']
        }
    }
}, (err) => {

    if (err) {
        throw err; // something bad happened loading the plugin
    }

    server.start((err) => {

        if (err) {
            throw err;
        }
        server.log('info', 'Server running at: ' + server.info.uri);
    });
});