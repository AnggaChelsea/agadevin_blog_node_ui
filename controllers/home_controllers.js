
const axios = require('axios');
class HomeControllers {
    static async getHome(req, res) {
        try{
            const resData = await axios.get('https://agadevin-e4ac9-default-rtdb.firebaseio.com/add-project.json')
            const resultData = resData.data
            const title = 'AgaDiDevin'
            const day = new Date()
            let getDay = day.getDay()
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
            console.log(resultData)
            const arr = []
            for(key in resultData ){
                arr.push(resultData[key])
            }
            res.render('index', {data: title, date: currday, dataCard: resultData})
        }
        catch{
            res.status(500).send('<h1>Error Server 500</h1>')
        }
    }
}
module.exports = HomeControllers
