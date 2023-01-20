//require express package
//globalizations and configurements 
const express = require('express')
const app = express()
const methodOverride = require('method-override')



//CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT



//MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))

//CONTROLLERS 
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
  })
  

app.get('*', (req, res) => {
  res.render('error404')
})

//connection
app.listen(PORT, ()=> {
  console.log('Listening on port', PORT)
})
