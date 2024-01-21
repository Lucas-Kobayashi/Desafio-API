const router = require('express').Router()

const customerController = require('../controllers/customers')

router.get('/customers', customerController.get)

module.exports = router