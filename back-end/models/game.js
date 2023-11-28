const mongoose = require("mongoose")

const gameSchema = mongoose.Schema({
    id: {
        required: true,
        type: String
    },
    team1: {
        required: true,
        type: Array
    },
    team2: {
        required: true,
        type: Array
    },
    sportName: {
        required: true,
        type: String
    },
    location: {
        required: true,
        type: String
    },
    inProgress: {
        required: true,
        type: Boolean
    },
    creationTime: {
        required: true,
        type: Date
    },
    dateAndTime: {
        required: true,
        type: String
    },
    isFull: {
        required: true,
        type: Boolean
    },
    winner: {
        required: true,
        type: String
    }
})

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;