const fetch = require('node-fetch');

const url = 'https://movies-tv-shows-database.p.rapidapi.com/?page=1';
const options = {
    method: 'GET',
    headers: {
      Type: 'get-upcoming-movies',
      'X-RapidAPI-Key': 'a048c41f45msh1746628f3b6ed2cp195beejsnc00ae02b3db1',
      'X-RapidAPI-Host': 'movies-tv-shows-database.p.rapidapi.com'
    }
  };

const apiController = {};

apiController.getData = (req, res, next) => {
    fetch(url, options)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        const upcomingMoviesArray = [];
        data.movie_results.forEach((el) => {
            upcomingMoviesArray.push(el.title)
        });
        res.locals.upcomingMovies = upcomingMoviesArray;
        console.log(res.locals.upcomingMovies);
        return next();
    })
};

apiController.test = (req, res, next) => {
    console.log('test');
    return next();
}

module.exports = apiController;