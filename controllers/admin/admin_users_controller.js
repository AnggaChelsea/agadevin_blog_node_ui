const subcribeModel = require('../../models/subscribe_model')
const moment = require('moment')

class AdminUsersList{
    static async getSubsriber(req, res, next){
        try{
            const admin = await subcribeModel.find()
            console.log(admin, 'admin')
            admin.map(e => e.createdAt = moment.format(admin.createdAt))
            if(admin){
                res.render('admin/admin', {
                    adminData: admin
                })
            }else{
                res.status(400).render('<h4>Maaf error 400</h4>')
            }
        }catch(error){
            res.status(500).render('<h4>Maaf error server 500</h4>')
        }
    }
}

module.exports = AdminUsersList