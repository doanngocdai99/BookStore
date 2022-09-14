const Book = require('../models/book')
const { mutipleMongooseToObject, mongooseToOblect } = require('../../util/Mongoose')
class SiteController {
    //[GET] /
    home(req,res,next) {
        Book.find({}).lean()
            .then(books => res.render('home',{ books}))
            .catch(next)
    }

    //[GET] /search
    search(req,res) {
        res.render('search')
    }
}

module.exports = new SiteController;