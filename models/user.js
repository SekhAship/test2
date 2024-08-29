const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    city: String,
    work:{
        type:String,
        enum:['chef','waiter','manager'],
        required:true
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;