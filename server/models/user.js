const mongoose = require('mongoose');

const Users = mongoose.model('Users', {
    email: {
        type: String,
        require: true,
        trim: true,
        minlength: 1
    }
});

module.exports = {Users};