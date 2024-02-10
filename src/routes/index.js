const router = require('express').Router()

const customerController = require('../controllers/customers')

router.get('/customers', customerController.get)
router.post('/customers', customerController.post)

module.exports = router