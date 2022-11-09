const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 5001;

// Use Pug as the templating engine
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

// REST Countries URL
const url = 'https://restcountries.com/v3.1/all';

// Add your code here

app.get('/', (req, res) => {
    // render pug template for the index.html file
    res.render('index', {
        heading: 'Countries of the World',
        main: 'Welcome to this application. Using the REST Countries API, we will be showing the countries and capitals of the world, the most populous countries in the world, and the number of countries in each region of the world',
    });
});

app.get('/capitals', async (req, res) => {
    // map the output array to create an array with country names and capitals
    // check for empty data in the output array
    getCountries((data) => {
        let countryAndCapitals = data
            .map((response) => {
                return `${response.name.common ? response.name.common : 'Not found'} - ${
                    response.capital ? response.capital : 'Not found'
                }`;
            })
            .sort();

        res.render('page', {
            heading: 'Countries and Capitals',
            results: countryAndCapitals,
        });
    }).catch((err) => console.log(err));
});

app.get('/populous', (req, res) => {
    // filter the output array for the countries with population of 50 million or more
    // sort the resulting array to show the results in order of population
    // map the resulting array into a new array with the country name and formatted population
    getCountries((data) => {
        const result = data
            .filter((response) => response.population > 50000000)
            .map((response) => {
                return `${response.name.common} - ${response.population}`;
            })
            .sort();
        res.render('page', {
            heading: 'Most Populous Countries',
            results: result,
        });
    }).catch((err) => console.log(err));
});

app.get('/regions', (req, res) => {
    // reduce the output array in a resulting object that will feature the numbers of countries in each region
    // disregard empty data from the output array
    getCountries((data) => {
        const regionsData = data.reduce((accumulator, randomNumber) => {
            accumulator[randomNumber.region] = ++accumulator[randomNumber.region] || 0;

            return accumulator;
        }, {});
        let regions = Object.entries(regionsData).map((x) => x.join('-'));
        res.render('page', {
            heading: 'Most Populous Countries',
            results: regions,
        });
    }).catch((err) => console.log(err));
});

async function getCountries(data) {
    await axios
        .get(url)
        .then(function (response) {
            data(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
