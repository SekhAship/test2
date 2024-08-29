const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/hotel');
const db = mongoose.connection;

db.on('connected', function () {
    console.log('mongodb connected');
});

db.on('error', function (err) {
    console.log('Mongoose default connection error: ' + err);
});

db.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
});

module.exports = db;