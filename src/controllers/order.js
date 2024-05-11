const OrderModel = require('../models/order')

async function get (req, res){
    const order = await OrderModel.find()

    res.send(order)
}

async function post(req, res){

}

async function remove(req,res){
    
}

module.exports = {
    get,
    post,
    remove
}