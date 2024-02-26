const ProductsModel = require('../models/products')

async function get(req, res) {
    const products = await ProductsModel.find()

    res.send(products)
}

async function post(req, res) {
    const {
        name,
        price
    } = req.body

    const product = new ProductsModel({
        name,
        price
    })

    product.save()

    res.send({
        message: 'success'
    })
}

async function remove(req, res) {
    const {id} = req.params

    console.log(id)

    const remove = await ProductsModel.deleteOne({ _id: id })
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