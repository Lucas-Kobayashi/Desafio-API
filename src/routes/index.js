const router = require('express').Router()

const CustomerController = require('../controllers/customers')

router.get('/customers', (req, res) =>{
    res.send({
        ok:123
    })
})

module.exports = router