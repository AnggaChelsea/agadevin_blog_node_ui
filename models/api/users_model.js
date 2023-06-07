//disni user js 
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false,
    },
    phone:{
        type: String,
        required: true
    },
})