import React, {useState, useEffect} from 'react';
import fetch from 'node-fetch';
import Youtube from 'react-youtube'
import '../styles.css'

const TVInfo = props =>{

    const YouTubeEmbed = ({ videoId }) => {
        const opts = {
          height: '390',
          width: '640',
          playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
          },
        };
      
        return <Youtube videoId={videoId} opts={opts} />;
    };
      

    const [loading, setLoading] = useState(true);
    const [movieInfo, setMovieInfo] = useState(null);
    const [movieTrailer, setMovieTrailer] = useState(null);
  
    useEffect(() => {
        async function getMovieInfo () {
            const url = 'https://mdblist.p.rapidapi.com/?i=';
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'a048c41f45msh1746628f3b6ed2cp195beejsnc00ae02b3db1',
                    'X-RapidAPI-Host': 'mdblist.p.rapidapi.com'
                }
            };

try {
	const response = await fetch(url + props.id, options);
	const result = await response.json();
	console.log(result);
     setMovieInfo(result.description)
     if (result.trailer != null) {
     setMovieTrailer(result.trailer.slice(28))}
     else {setMovieTrailer(undefined)}
      setLoading(false)
    } catch (error) {
        console.error(error);
    }
      }
    getMovieInfo()
  }, [])

//     useEffect(() => {
//         async function getMovieDetails () {
//             const url = 'https://api.kinocheck.de/shows?imdb_id=';
//             const uniqueParam = `?timestamp=${Date.now()}`;
//             const options = {
//               method: 'GET'
//             };
  
//     try {
//         const response = await fetch(url + props.id, options);
//         const result = await response.json();
        
//     //   setMovieInfo(videoSource.description)
//     console.log(result)
//       setMovieTrailer(result.trailer)
//       setLoading(false)
//     } catch (error) {
//         console.error(error);
//     }
//       }
//     getMovieDetails()
//   }, [])

  return(
    <div>{loading ? (
      <p>Loading...</p>
    ) : (
      <div className = "movieInfoBox">
      <h2>Description: {movieInfo}</h2>
      <br/>
      {movieTrailer === undefined ? (<img src = {'https://ets2.lt/wp-content/uploads/2022/09/404-Not-Found-Trailer-Skin-3.jpg'} alt = "no trailer" className = "trailer-image"/>) : 
      (<YouTubeEmbed videoId={movieTrailer} />)}
    </div>
    )}
    </div>
  )
}

export default TVInfo