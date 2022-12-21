
require('dotenv').config()
const express = require('express')
const app = express()

//sets all routes in the places controller relative to /places.
app.use('/places', require('./controllers/places'))

//hello word or home page
app.get('/', (req, res) => {
    res.send('Hello world!')
})

//404 placed at BOTTOM
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

//gets port info from ENV file
app.listen(process.env.PORT)