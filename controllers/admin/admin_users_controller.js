const subcribeModel = require('../../models/subscribe_model')

class AdminUsersList{
    static async getSubsriber(req, res, next){
        try{
            const admin = await subcribeModel.find()
            console.log(admin, 'admin')
            if(admin){
                res.render('admin/admin')
            }else{
                res.status(400).render('<h4>Maaf error 400</h4>')
            }
        }catch(error){
            res.status(500).render('<h4>Maaf error server 500</h4>')
        }
    }
}

module.exports = AdminUsersList