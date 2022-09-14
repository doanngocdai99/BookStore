const Book = require('../models/book')
const { mutipleMongooseToObject, mongooseToOblect } = require('../../util/Mongoose')

class MeController {
    
    //[GET] books/create
    storedBook(req,res,next){
        Book.find({}).lean()
            .then(books => res.render('me/stored-books',{books}))
            .catch(next)
    }
}

module.exports = new MeController;