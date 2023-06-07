const SetResponse = (req, res, next) => {
    res.costumStatus = res.locals.customStatus
    res.costumMessage = res.locals.costumMessage
    next()
}
module.exports = SetResponse;