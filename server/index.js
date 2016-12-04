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

//REGISTER PLUGINS
server.register([
    {
        register: Inert,
    },
    {
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
    }
], (err) => {
    if (err) return console.error(err);

    server.connection({ port: 8080 });

    //DEFINE ROUTES
    server.route({
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: '.',
                index: ['index.html']
            }
        }
    });

    server.start((err) => {
        if (err) {
            console.error(err);
        }

        server.log('info', 'Server running at: ' + server.info.uri);
    });
});