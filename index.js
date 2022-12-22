
require('dotenv').config()
const express = require('express')
const app = express()

//defines the view engine JSX
    /*A template engine works in a rather simple manner:
    you create a template and, with the appropriate syntax, pass 
    variables into it. Then, at the appropriate route to render the 
    template, you assign values to the variables declared in your 
    template file. These are compiled in real time as the template 
    gets rendered.*/
    // https://blog.logrocket.com/top-express-js-template-engines-for-dynamic-html-pages/
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//sets all routes in the places controller relative to /places.
app.use('/places', require('./controllers/places'))

//GET hello word or home page
app.get('/', (req, res) => {
    res.render('home')
  })
  
//GET 404 placed at BOTTOM
app.get('*', (req, res) => {
    res.render('error404')
})

//gets port info from ENV file
app.listen(process.env.PORT)