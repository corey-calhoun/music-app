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
                <p>Album and Song Details</p>
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
