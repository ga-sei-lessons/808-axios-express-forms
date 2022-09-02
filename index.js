// required packages
const express = require('express')
const axios = require('axios')

// config an instance of express
const app = express()
const PORT = 3000
app.set('view engine', 'ejs')

// define some routes
app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/search', (req, res) => {
    // take in form data
    // GET forms create query strings
    console.log(req.query)
    const url = `https://swapi.dev/api/people?search=${req.query.userInput}`
    // make a http request to the SWAPI
    axios.get(url)
        .then(response => {
            // render the data to the user
            console.log(response.data)
            res.render('results.ejs', {
                input: req.query.userInput,
                people: response.data.results
            })
        })
        .catch(console.error)
})

// listen on a port
app.listen(PORT, () => {
    console.log(`aaaaarrrrrrghgghgrgrhgrgr ${PORT}`)
})