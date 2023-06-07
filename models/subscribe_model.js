const mongoose = require('mongoose')

const SubscribeSchema = new mongoose.Schema({
    email: {
        required: true,
        type:String,
    }
})
const subscribe = mongoose.model('subcriber', SubscribeSchema)
module.exports = subscribe