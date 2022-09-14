const Book = require('../models/book')
const { mutipleMongooseToObject, mongooseToOblect } = require('../../util/Mongoose')

class BookController {
    //[GET] /books/:slug
    show(req,res,next) {
        Book.findOne({ slug: req.params.slug }).lean()
            .then(book => res.render('books/show_book',{book})
            )
            .catch(next)
    }
    //[GET] books/create
    create(req,res,next){
        res.render('books/create')
    }
    //[POST] books/add
    add(req,res,next){
        const formData = req.body
        const book = new Book(formData)
        book.save()
            .then(() => res.redirect('/'))
    }
    //[GET] /books/:id
    edit(req,res,next){
        Book.findById(req.params.id).lean()
            .then(book => res.render('books/edit',{book})
            )
            .catch(next)
    }
    //[PUT] /books/:id
    up(req,res,next){
        Book.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/me/stored/mybook'))
            .catch(next)
    }
    //[DELETE] /books/:id
    del(req,res,next){
        Book.delete({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next)
    }
}

module.exports = new BookController;