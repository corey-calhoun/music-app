import React from 'react'
import './Player.css'
import Body from './Body'
import Sidebar from './Sidebar'

function Player() {
    return (
        <div className="player">
            <div className="player__body">
                <Sidebar /> 
                <Body />  
            </div>
            

           {/* Footer */} 
        </div>
    )
}

export default Player
