const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    id: {
        required: true,
        type: String
    },
    username: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    games: {
        required: true,
        type: Array
    },
    location: {
        required: true,
        type: String
    },
    win: {
        required: true,
        type: Number
    },
    loss: {
        required: true,
        type: Number
    },
    friends: {
        required: true,
        type: Array
    },
    comments: {
        required: true,
        type: Array
    },
    bio: {
        required: true,
        type: String
    }
});


const user = mongoose.model('user', userSchema)

module.exports = user