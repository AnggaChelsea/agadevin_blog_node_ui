// import mongoose from 'mongoose'
const mongoose = require('mongoose')

const mongodbconnection = async() => {
    try{
        await mongoose.connect("mongodb://olx_service:Sayangmamah1@cluster0-shard-00-00.ma8no.mongodb.net:27017,cluster0-shard-00-01.ma8no.mongodb.net:27017,cluster0-shard-00-02.ma8no.mongodb.net:27017/osi_db?ssl=true&replicaSet=atlas-pjxqhg-shard-0&authSource=admin&retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('MongoDB Connected');
    }
    catch (error){
        console.error(error);
    }
    
}

module.exports = mongodbconnection
// export default mongodbconnection;
