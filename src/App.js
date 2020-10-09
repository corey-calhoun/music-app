import React, { useEffect, useState } from 'react';
import './assets/css/App.css';
import Login from './components/Login'
import { getTokenFromUrl } from './spotify'
import SpotifyWebApi from 'spotify-web-api-js'

const spotify = new SpotifyWebApi();

function App() {

  const [token, setToken] = useState(null);


  // run code based on condition when app loads
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if(_token) {
      setToken(_token)
      spotify.setAccessToken(_token); // giving asccess token to Api
      spotify.getMe().then(user => {
        console.log(user);
      });
    }
  }, []);

  return (
    <div className="App">
      {
        token ? (
          <h1>You're logged in</h1>
        ) : (
          <Login />
        )
      }
     
    </div>
  );
}

export default App;
