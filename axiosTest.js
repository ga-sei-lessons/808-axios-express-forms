// https://swapi.dev/api/people
const axios = require('axios')

const url = 'https://swapi.dev/api/people?search=Leia'

//axios.httpMethod(url to make http request to)
axios.get(url)
    // axios returns a promise that is dot thennable
    .then(response => {
        // axios always puts the API response json in a .data key
        console.log(response.data)
    })
    .catch(console.warn)