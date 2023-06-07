const axios = require('axios');
const SubscribeSchema = require('../models/subscribe_model')
class HomeControllers {
    static async getHome(req, res) {
        try {
            const dataDb = await SubscribeSchema.find()
            if (dataDb) {
                const title = 'AgaDiDevin'

                res.render('index', {
                    data: title,
                    // hari: currday,
                    email: dataDb[0].email
                })
            }
            const day = new Date()

            const option = {
                weekday: 'long',
                day: 'numeric',
                month: 'long'
            }
            var dayconvert = day.toLocaleDateString("en-US", option)

            let items = []
        } catch {res.status(500).send('<h1>Error Server 500</h1>')}}

    static async addSubsribe(req, res, next) {
        const email = req.body.email
    //    const getRes = document.getElementById('alertMessage')
        console.log(email)
        try { // Check if email already exists in the database
            const existingSubscribe = await SubscribeSchema.findOne({email});
            if (existingSubscribe) { // If email exists, send an alert message
                const statusError = true
                res.render('index', {
                    error : statusError
                })
            } else { // If email does not exist, create a new entry
                const subscribe = await SubscribeSchema.create({email});
                console.log(subscribe);
                const response = {
                    status: 200,
                    message: 'Success subscribe, thank you!'
                }
                if (response.status === 200) {

                  }
                res.status(200).json(response);
            }
        } catch (error) {
            const response = {
                status: 500,
                message: 'Internal Server Error'
            }
            console.error('Error:', error);
            res.status(500).send(response);
        }
    }
}
module.exports = HomeControllers
