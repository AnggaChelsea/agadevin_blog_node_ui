
const axios = require('axios');
class HomeControllers {
    static async getHome(req, res) {
        try{
            const day = new Date()

            const option = {
                weekday: 'long',
                day: 'numeric',
                month: 'long'
            }
            var dayconvert = day.toLocaleDateString("en-US", option)

           var items = []
            const title = 'AgaDiDevin'
            let getDay = day.getDay()
            console.log(getDay)
            let currday = ''
            switch (getDay) {
                case 0: currday = 'Minggu'
                    break;
                case 1: currday = 'Senin'
                    break;
                case 2: currday = 'Selasa'
                    break;
                case 3: currday = 'Rabu'
                    break;
                case 4: currday = 'Kamis'
                    break;
                case 5: currday = 'Jumat'
                    break;
                case 6: currday = 'Sabtu'
                    break;
                default:
                    console.log('wow ')
            }
            console.log(currday, 'curr day')
            console.log(items,' items')
           
            res.render('index', {data: title, hari: currday, list:items})
        }
        catch{
            res.status(500).send('<h1>Error Server 500</h1>')
        }
    }

   static async addSubsribe(req, res){
    const item = req.body.email;
    console.log(item)
    if(item){
        // alert('success')
        res.redirect("/")
    }

   }
}
module.exports = HomeControllers
