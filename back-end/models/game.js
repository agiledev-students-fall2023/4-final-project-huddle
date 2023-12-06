const mongoose = require("mongoose");

const gameSchema = mongoose.Schema({
    id: {
        required: true,
        type: String
    },
    team1: {
        required: true,
        type: Array,
        default: [] 
    },
    team2: {
        required: true,
        type: Array,
        default: [] 
    },
    sportName: {
        required: true,
        type: String
    },
    maxPlayers: {
        required: true,
        type: Number
    },
    location: {
        required: true,
        type: String
    },
    inProgress: {
        required: true,
        type: Boolean,
        default: false 
    },
    creationTime: {
        required: true,
        type: Date,
        default: Date.now 
    },
    dateAndTime: {
        required: true,
        type: String
    },
    isFull: {
        required: true,
        type: Boolean,
        default: false
    },
    winner: {
        required: true,
        type: String,
        default: ''  
    }
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;
