const mongoose = require("mongoose")

const messageSchema = mongoose.Schema({

    senderid: {
        required: true,
        type: String
    },
    message: {
        required: true,
        type: String
    }
})
    

const Message = mongoose.model('Message', messageSchema)

module.exports = Message