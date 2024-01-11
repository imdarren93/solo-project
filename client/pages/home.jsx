import React from 'react';
import '../styles.css'

function Home() {
    return(
        <div className = "homepage">
            <div className='login-box'>
                <h2>Login</h2>
                <form>
        <label htmlFor="username">Username:</label>
        <input></input>

        <label htmlFor="password">Password:</label>
        <input></input>

        <button type="button">
          Login
        </button>
      </form>
            </div>
    </div>
    )
}

export default Home