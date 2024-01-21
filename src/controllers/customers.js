const CustomersModels = require('../models/customers')

async function get(req, res) {
    const customers = await CustomersModels.find()

    res.send(customers)
}

module.exports = {
    get,
}