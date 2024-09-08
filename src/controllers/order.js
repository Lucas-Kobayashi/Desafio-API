const OrderModel = require('../models/order')

async function get (req, res){
    const order = await OrderModel.find()

    res.send(order)
}

async function post(req, res){

    try{
        const {customer_id} = req.params
        const {products_id} = req.params

    
        const data = {product: products_id,customer: customer_id}
        

        const order = new OrderModel(data)
    
        order.save()
    
        res.send({
            message: 'success'
        })
    }
    catch(err){
        res.status(400).send(err)
    }

}

async function remove(req,res){
    
}

module.exports = {
    get,
    post,
    remove
}