const express = require('express')
const router = express.Router()
const meController = require('../app/controller/MeController');

router.get('/stored/mybook', meController.storedBook)

module.exports = router