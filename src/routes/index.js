const router = require('express').Router()

const customerController = require('../controllers/customers')

router.get('/customers', customerController.get)
router.post('/customers', customerController.post)
router.delete('/customers/:id', customerController.remove)

module.exports = router