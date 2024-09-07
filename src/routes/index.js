const router = require('express').Router()

const customerController = require('../controllers/customers')
const productController = require('../controllers/products')
const orderController = require('../controllers/order')

router.get('/customers', customerController.get)
router.post('/customers', customerController.post)
router.delete('/customers/:id', customerController.remove)

router.get('/products', productController.get)
router.post('/products', productController.post)
router.delete('/products/:id', productController.remove)

router.get('/order', orderController.get)



module.exports = router