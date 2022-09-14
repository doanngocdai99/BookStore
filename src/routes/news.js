const express = require('express')
const router = express.Router()
const newComponent = require('../app/controller/NewsController');

router.get('/:id', newComponent.show)
router.get('/', newComponent.index)

module.exports = router