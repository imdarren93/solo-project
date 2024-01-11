import React, { Component, useState, useEffect } from 'react';
import { Link, Route, Routes} from 'react-router-dom';
import { ReactDOM } from 'react-dom/client';
import  MoviesDisplay  from './pages/moviesDisplay.jsx';
import  TVshowDisplay  from './pages/tvshowDisplay.jsx';
import  Home  from './pages/home.jsx';

const App = () => {
    return(
        <>
        <div className='nav'>
            <nav className='navbar'>
                <ul className='nav-list'>
                    <li className='nav-item'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/movies">Movies</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/tvshows">TV Shows</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/">My List</Link>
                    </li>
                </ul>
            </nav>
        </div>
        <div>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/movies" element={<MoviesDisplay />}/> 
                <Route path="/tvshows" element={<TVshowDisplay />}/> 
            </Routes>
            </div>
            </>
    )
}

// const App = () => {
//     return(
//         <div>
//             <h1>This is my app!</h1>
//             <MoviesDisplay/>
//         </div>
//     )
// }

export default App;