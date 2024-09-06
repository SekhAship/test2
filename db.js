require('dotenv').config();

const dburl = process.env.DB_URL;


const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/hotel');
mongoose.connect(dburl);
// mongodb+srv://ash:<db_password>@cluster0.xa7nn.mongodb.net/

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