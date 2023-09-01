const axios = require('axios');
const SubscribeSchema = require('../models/subscribe_model')
class HomeControllers {
    static async getHome(req, res) {
        try {
            const dataDb = await SubscribeSchema.find()
            if (dataDb) {
                console.log(dataDb)
                const title = 'Agasadev'

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
            // let getDay = day.getDay()
            // console.log(getDay)
            // let currday = ''
            // switch (getDay) {
            //     case 0: currday = 'Minggu'
            //         break;
            //     case 1: currday = 'Senin'
            //         break;
            //     case 2: currday = 'Selasa'
            //         break;
            //     case 3: currday = 'Rabu'
            //         break;
            //     case 4: currday = 'Kamis'
            //         break;
            //     case 5: currday = 'Jumat'
            //         break;
            //     case 6: currday = 'Sabtu'
            //         break;
            //     default:
            //         console.log(items, 'wow bisa')
            // }

        } catch {res.status(500).send('<h1>Error Server 500</h1>')}}

    static async addSubsribe(req, res, next) {
        const email = req.body.email
        try {
            const data = await SubscribeSchema.create({email: email})
            data.save()
            // res.locals.customStatus = {message: 200}
            // res.locals.customMessage = {message: 'success subscribe thank u'}
            const response = {
                status: 200,
                message: 'success subscribe thank u'
            }
            items.push({
                ... response
            })
            next()
            res.redirect("/")
        } catch {res.status(500).send('<h1>Error Server 500</h1>')}}
}
module.exports = HomeControllers
