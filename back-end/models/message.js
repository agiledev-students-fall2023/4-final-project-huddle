const mongoose = require("mongoose")

const messageSchema = mongoose.Schema({

    senderid: {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },

    message: {
        required: true,
        type: String,
    },

    timestamp: {
        type: Date, 
        default: Date.now,
    }
})
    

const Message = mongoose.model('Message', messageSchema)

module.exports = Message