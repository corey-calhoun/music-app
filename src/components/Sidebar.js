import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import HomeIcon from '@material-ui/icons/Home'
import Search from '@material-ui/icons/Search'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';

function Sidebar() {
    return (
        <div className="sidebar">
            <img 
             className="sidebar__logo"
             src="https://www.nicepng.com/png/full/48-482191_download-now-from-spotify-wind-turbine-icon.png" 
             alt="" />
            <SidebarOption Icon={HomeIcon} title="Home" />
            <SidebarOption Icon={Search} title="Search" />
            <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
            <br />
            <strong className="sidebar__title">Playlists</strong>
            <hr />

            <SidebarOption title="Hip Hop" />
            <SidebarOption title="Rock" />
            <SidebarOption title="Aerosmith Radio" />
            <SidebarOption title="Chill" />
        </div>
    )
}

export default Sidebar
