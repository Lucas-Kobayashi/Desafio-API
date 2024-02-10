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

module.exports = {
    get,
    post
}