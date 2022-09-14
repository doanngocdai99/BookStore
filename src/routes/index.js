
const newsRouter = require('./news')
const meRouter = require('./me')
const siteRouter = require('./site')
const bookRouter = require('./book')

function route(app){
    app.use('/books', bookRouter);
    app.use('/me', meRouter);
    app.use('/news', newsRouter);
    app.use('/',siteRouter)
}

module.exports = route