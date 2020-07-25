var express = require('express')
var router = express.Router()
const cards = require('./cards')


router.use('/cards', cards)

module.exports = router