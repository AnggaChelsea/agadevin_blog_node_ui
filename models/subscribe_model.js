const mongoose = require('mongoose')

const SubscribeSchema = new mongoose.Schema({
    email: {
        required: true,
        type:String,
    },
    createdAt: {
        type:Date,
        default: new Date()
    }
},{ timestamps: true })
const subscribe = mongoose.model('subcriber', SubscribeSchema)
module.exports = subscribe