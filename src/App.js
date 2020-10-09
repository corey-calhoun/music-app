/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import './assets/css/App.css';
import Login from './components/Login'
import { getTokenFromUrl } from './spotify'
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './components/Player';
import { useDataLayerValue } from './components/DataLayer'

const spotify = new SpotifyWebApi();

function App() {

  const [token, setToken] = useState(null);
  const [{ user }, dispatch] = useDataLayerValue();


  // run code based on condition when app loads
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if(_token) {
      setToken(_token)

      spotify.setAccessToken(_token); // giving asccess token to Api
      spotify.getMe().then(user => {

        dispatch({
          type: 'SET_USER',
          user: user
        })
      });
    }

    console.log(user)
  }, []);

  return (
    <div className="App">

      {
        token ? (
          <Player />
        ) : ( // Display player if there is a token, if not, display Login
          <Login />
        )
      }
     
    </div>
  );
}

export default App;
