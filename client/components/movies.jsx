import React, {useState, useEffect} from 'react';
import fetch from 'node-fetch';
import MovieInfo from './movieDetails.jsx'
import Modal from './modal.jsx'
import '../styles.css'



const Movies = props =>{

  const [isModalOpen, setModalOpen] = useState(false);

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const [loading, setLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    async function getMovieImage () {
    const url = 'https://movies-tv-shows-database.p.rapidapi.com/?movieid=';
    const options = {
    method: 'GET',
    headers: {
      Type: 'get-movies-images-by-imdb',
      'X-RapidAPI-Key': 'a048c41f45msh1746628f3b6ed2cp195beejsnc00ae02b3db1',
      'X-RapidAPI-Host': 'movies-tv-shows-database.p.rapidapi.com'
    }
  };

  try {
	  const response = await fetch(url+props.id.slice(0,-1), options);
	  const result = await response.json();
    // console.log(result)
    // console.log(result.poster)
    setImageUrl(result.poster)
    setLoading(false)
  } catch (error) {
	  console.error(error);
  }
    }
  getMovieImage()
}, [])

  return(
    <div>{loading ? (
      <p>Loading...</p>
    ) : (
      <div className = "movieBox">
      <h1>Release Date: {props.releaseDate}</h1>
      {imageUrl === undefined ? (<img src = {'https://www.tgv.com.my/assets/images/404/movie-poster.jpg'} alt = "No Image" className = "resized-image"/>) : (<img src={imageUrl} alt="Fetched Image" className = "resized-image"/>)}
      <p><button className='button2'>
      Add To My List
    </button></p>
      <p><button onClick={openModal}>More Info</button></p>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <MovieInfo id = {props.id.slice(0,-1)}/>
      </Modal>
    </div>
    )}
    </div>
  )
}

export default Movies