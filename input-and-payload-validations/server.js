const hapi = require('hapi');

const server = new hapi.Server();
const mongoose = require('mongoose');
const companyRoutes = require('./routes/company.routes');


const mongoDbUri = 'mongodb://localhost:27017/hapi_db';
mongoose.connect(mongoDbUri, {
    useMongoClient: true
});
mongoose.connection.on('connected', () => {
    console.log(`app is connected to ${mongoDbUri}`);
});
mongoose.connection.on('error', err => {
    console.log('error while connecting to mongodb', err);
});

server.connection({host: '127.0.0.1', port: '3000'});
server.route({
    path: '/',
    method: 'GET',
    handler(req, reply) {
        reply('Welcome to HapiJs course!!');
    }
});

server.route(companyRoutes);

server.start(err => {
    if (err) {
        throw err;
    }
    console.log(`Server Running at PORT ${server.info.port}`);
});
