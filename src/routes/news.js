const express = require('express')
const router = express.Router()
const newComponent = require('../app/controller/NewsController');

router.use('/:id', newComponent.show)
router.use('/', newComponent.index)

module.exports = router