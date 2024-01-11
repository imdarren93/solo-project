import React, {useState, useEffect} from 'react';
import fetch from 'node-fetch';
import Movies from '../components/movies.jsx';
import '../styles.css'


// const movieDisplay = props => {
    
//     // const movieList = useSelector(state => state.movies.movieList)
// }
const movieObject = [];
const MoviesDisplay = props => {
    


    const [loading, setLoading] = useState(true);

    useEffect(()=> {
    async function getMovieData () {
    const url = 'https://online-movie-database.p.rapidapi.com/title/get-coming-soon-movies?currentCountry=US&purchaseCountry=US&homeCountry=US';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a048c41f45msh1746628f3b6ed2cp195beejsnc00ae02b3db1',
            'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        // console.log(result);
        // for (let i = 0; i < 12; i++) {
        //     initialState.movieID.push(result[i]["id"]);
        //     initialState.movieRelease.push(result[i]["releaseDate"])
        for (let i = 0; i < 12; i++) {
            movieObject.push(result[i]);
        }
        // result.forEach((prop) => initialState.movieID.push(prop["id"]));
        // result.forEach( (prop) => initialState.movieRelease.push(prop["releaseDate"]));
        setLoading(false)
    } catch (error) {
        console.error(error);
    }
    }   

    getMovieData()
}, [])
    
    // const allMovies = movieObject.map((movieObject, index) => <Movies relea key = {index}/>);
    

    // const [movieRelease, setMovieRelease] = useState(['this is movie release']);

    
    // useEffect(() => {
    //     getMovieData();
    // }, []);
    // console.log(movieRelease);
    console.log("movie object: ", movieObject)
    
    return(
        <div>{loading ? (
            <p>Loading...</p>
          ) : (
            <div className = "movieDisplay">
        <Movies releaseDate = {movieObject[0].releaseDate} id = {movieObject[0].id.slice(7)}/>
        <Movies releaseDate = {movieObject[1].releaseDate} id = {movieObject[1].id.slice(7)}/>
        <Movies releaseDate = {movieObject[2].releaseDate} id = {movieObject[2].id.slice(7)}/>
        <Movies releaseDate = {movieObject[3].releaseDate} id = {movieObject[3].id.slice(7)}/>
        <Movies releaseDate = {movieObject[4].releaseDate} id = {movieObject[4].id.slice(7)}/>
        <Movies releaseDate = {movieObject[5].releaseDate} id = {movieObject[5].id.slice(7)}/>
        <Movies releaseDate = {movieObject[6].releaseDate} id = {movieObject[6].id.slice(7)}/>
        <Movies releaseDate = {movieObject[7].releaseDate} id = {movieObject[7].id.slice(7)}/>
        <Movies releaseDate = {movieObject[8].releaseDate} id = {movieObject[8].id.slice(7)}/>
        <Movies releaseDate = {movieObject[9].releaseDate} id = {movieObject[9].id.slice(7)}/>
        <Movies releaseDate = {movieObject[10].releaseDate} id = {movieObject[10].id.slice(7)}/>
        <Movies releaseDate = {movieObject[11].releaseDate} id = {movieObject[11].id.slice(7)}/>
    </div>
          )}
            </div>
    )
}

export default MoviesDisplay