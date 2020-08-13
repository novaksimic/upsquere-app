const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    hash: {
        type: String
    },
    salt: {
        type: String
    },
    resetToken: String,
    resetTokenExpiration: Date
})

module.exports = mongoose.model('User', userSchema);
