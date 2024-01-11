import React, {useState, useEffect} from 'react';
import fetch from 'node-fetch';
import TVShows from '../components/tvshow.jsx';
import '../styles.css'


// const movieDisplay = props => {
    
//     // const movieList = useSelector(state => state.movies.movieList)
// }
const tvObject = [];
const TvshowDisplay = props => {
    
    const uniqueParam = `?timestamp=${Date.now()}`;

    const [loading, setLoading] = useState(true);

    useEffect(()=> {
    async function getTVShowData () {
        const url = 'https://movies-tv-shows-database.p.rapidapi.com/?page=1';
const options = {
  method: 'GET',
  headers: {
    Type: 'get-trending-shows',
    'X-RapidAPI-Key': 'a048c41f45msh1746628f3b6ed2cp195beejsnc00ae02b3db1',
    'X-RapidAPI-Host': 'movies-tv-shows-database.p.rapidapi.com'
  }
};
    

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        // for (let i = 0; i < 12; i++) {
        //     initialState.movieID.push(result[i]["id"]);
        //     initialState.movieRelease.push(result[i]["releaseDate"])
        for (let i = 0; i < 12; i++) {
            tvObject.push(result.tv_results[i]);
        }
        // result.forEach((prop) => initialState.movieID.push(prop["id"]));
        // result.forEach( (prop) => initialState.movieRelease.push(prop["releaseDate"]));
        setLoading(false)
    } catch (error) {
        console.error(error);
    }
    }   

    getTVShowData()
}, [])
    
    // const allMovies = movieObject.map((movieObject, index) => <Movies relea key = {index}/>);
    

    // const [movieRelease, setMovieRelease] = useState(['this is movie release']);

    
    // useEffect(() => {
    //     getMovieData();
    // }, []);
    // console.log(movieRelease);
    // console.log("movie object: ", tvObject)
    
    return(
        <div>{loading ? (
            <p>Loading...</p>
          ) : (
            <div className = "movieDisplay">
        <TVShows id = {tvObject[0].imdb_id}/>
        <TVShows  id = {tvObject[1].imdb_id}/>
        <TVShows  id = {tvObject[2].imdb_id}/>
        <TVShows id = {tvObject[3].imdb_id}/>
        <TVShows  id = {tvObject[4].imdb_id}/>
        <TVShows id = {tvObject[5].imdb_id}/>
        <TVShows  id = {tvObject[6].imdb_id}/>
        <TVShows  id = {tvObject[7].imdb_id}/>
        <TVShows  id = {tvObject[8].imdb_id}/>
        <TVShows id = {tvObject[9].imdb_id}/>
        <TVShows id = {tvObject[10].imdb_id}/>
        <TVShows id = {tvObject[11].imdb_id}/>
    </div>
          )}
            </div>
    )
}

export default TvshowDisplay