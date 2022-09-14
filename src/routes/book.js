const express = require('express')
const router = express.Router()
const bookController = require('../app/controller/BookController');

router.post('/add', bookController.add)
router.get('/create', bookController.create)
router.get('/:id/edit', bookController.edit)
router.put('/:id', bookController.up)
router.delete('/:id', bookController.del)
router.get('/:slug', bookController.show)
module.exports = router