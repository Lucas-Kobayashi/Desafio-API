const CustomersModel = require('../models/customers')

async function get(req, res) {
    const customers = await CustomersModel.find()

    res.send(customers)
}

async function post(req, res) {
    const {
        name,
        email,
        phone,
        address
    } = req.body

    const customer = new CustomersModel({
        name,
        email,
        phone,
        address
    })

    customer.save()


    res.send({
        message: "success"
    })
}

async function remove(req, res) {
    const { id } = req.params

    const remove = await CustomersModel.deleteOne({ _id: id})
    const message = remove.deletedCount == 1 ? 'success' : 'error'

    res.send({
        message,
    })

}

module.exports = {
    get,
    post,
    remove
}