const express = require('express')
const morgan = require('morgan')
const path = require('path')
const handlebars = require('express-handlebars');
const app = express()
const port = 3000
const route = require('./routes/index');


app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

//app.use(express.static(path.join(__dirname, '/public')))
// HTTP logger
// app.use(morgan('combined'))


// Template engine
app.engine('.hbs', handlebars.engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, '/resources/views'));

// route init

route(app)



// newscontroller.index

//router.get('/:id',newsController.show)
    

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})