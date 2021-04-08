const mongoose = require('mongoose')
// const autoIncrement = require('mongoose-auto-increment')

let uri = 'mongodb://localhost:27017/ludo_game'

if (process.env.NODE_ENV === 'production') {
    uri = process.env.MONGODB_URI
}

let connection = mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    // useMongoClient: true
})

// autoIncrement.initialize(connection);

mongoose.connection.on('connected', () => {
    console.log('===============')
    console.log('===============')
    console.log(`Mongoose Connected to ${uri}`)
    console.log('===============')
    console.log('===============')
})

const shutdown = (msg, callback) => {
    mongoose.connection.close(() => {
        console.log(`Mongoose disconnected through ${msg}`);
        callback();
    });
};

process.once('SIGUSR2', () => {
    shutdown('nodemon restart', () => {
        process.kill(process.pid, 'SIGUSR2');
    });
});


process.on('SIGINT', () => {
    shutdown('app termination', () => {
        process.exit(0);
    });
});


process.on('SIGTERM', () => {
    shutdown('Heroku app shutdown', () => {
        process.exit(0);
    });
});

require('./subjective.js')