import React from 'react'
import './Footer.css'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import { SkipNext, SkipPrevious, VolumeDown } from '@material-ui/icons';
import { Grid, Slider } from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';


function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
                <img 
                 className="footer_albumCover"
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT1Hom7pApbObsjVNYqJOcPi_b-xLcFIPYuLg&usqp=CAU" alt="" />
                <div className="footer__songInfo">
                    <h4>Song Title</h4>
                    <p>Artist</p>
                </div> 
            </div>
            <div className="footer__center">
                <ShuffleIcon className="footer__green" />
                <SkipPrevious className="footer__icon" />
                <PlayCircleOutlineIcon className="footer__icon" fontSize="large" />
                <SkipNext className="footer__icon" />
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
                        <Slider  />
                    </Grid>
                </Grid>
            </div>

        </div>
    )
}

export default Footer
