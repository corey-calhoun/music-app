import React, {useEffect} from 'react'
import './Footer.css'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import { PauseCircleOutline, SkipNext, SkipPrevious, VolumeDown } from '@material-ui/icons';
import { Grid, Slider } from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import { useDataLayerValue } from './DataLayer';


function Footer({spotify}) {

    const [{ token, item, playing }, dispatch] = useDataLayerValue();

    useEffect(() => {
        spotify.getMyCurrentPlaybackState().then((r) => {
        console.log(r);

        dispatch({
            type: "SET_PLAYING",
            playing: r.is_playing,
        });

        dispatch({
            type: "SET_ITEM",
            item: r.item,
        });
        });
    }, [spotify, dispatch]);

    const handlePlayPause = () => {
        if (playing) {
        spotify.pause();
        dispatch({
            type: "SET_PLAYING",
            playing: false,
        });
        } else {
        spotify.play();
        dispatch({
            type: "SET_PLAYING",
            playing: true,
        });
        }
    };

    const skipNext = () => {
        spotify.skipToNext();
        spotify.getMyCurrentPlayingTrack().then((r) => {
        dispatch({
            type: "SET_ITEM",
            item: r.item,
        });
        dispatch({
            type: "SET_PLAYING",
            playing: true,
        });
        });
    };

    const skipPrevious = () => {
        spotify.skipToPrevious();
        spotify.getMyCurrentPlayingTrack().then((r) => {
        dispatch({
            type: "SET_ITEM",
            item: r.item,
        });
        dispatch({
            type: "SET_PLAYING",
            playing: true,
        });
        });
    };

    return (
        <div className="footer">
            <div className="footer__left">
                <img 
                 className="footer_albumCover"
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT1Hom7pApbObsjVNYqJOcPi_b-xLcFIPYuLg&usqp=CAU" alt="" />
                <div className="footer__songInfo">
                    <h4>{item.name}</h4>
                    <p>...</p>
                </div> 
            </div>
            <div className="footer__center">
                <ShuffleIcon className="footer__green" />
                <SkipPrevious 
                 onClick={skipPrevious} 
                 className="footer__icon" 
                /> 
                    {playing ? (
                        <PauseCircleOutline
                            onClick={handlePlayPause}
                            fontSize="large"
                            className="footer__icon"
                        />
                        ) : (
                        <PlayCircleOutlineIcon
                            onClick={handlePlayPause}
                            fontSize="large"
                            className="footer__icon"
                        />
                    )}
                <PlayCircleOutlineIcon className="footer__icon" fontSize="large" />
                <SkipNext onClick={skipNext} className="footer__icon" />
                <RepeatIcon className="footer__green" />
            </div>
            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDown />
                    </Grid>
                    <Grid item xs>
                        <Slider aria-labelledby="continuous-slider" />
                    </Grid>
                </Grid>
            </div>

        </div>
    )
}

export default Footer
