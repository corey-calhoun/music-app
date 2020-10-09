/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import './assets/css/App.css';
import Login from './components/Login'
import { getTokenFromUrl } from './spotify'
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './components/Player';
import { useDataLayerValue } from './components/DataLayer'

const spotify = new SpotifyWebApi();

function App() {

  const [{ user, token }, dispatch] = useDataLayerValue();


  // run code based on condition when app loads
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if(_token) {

      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })

      spotify.setAccessToken(_token); // giving asccess token to Api
      spotify.getMe().then(user => {

        dispatch({
          type: 'SET_USER',
          user: user
        })
      });
    }
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
