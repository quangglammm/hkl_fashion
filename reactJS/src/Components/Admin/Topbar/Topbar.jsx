

import React from 'react'
import './Topbar.css';
import { NotificationsNone, Language, Settings } from '@mui/icons-material';
import logopj from '../../Images/logoChristmas.png';
export default function Topbar() {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">
                    HKL Fashion Manage
                </span>
            </div>
            <div className="topRight">
                <div className="topbarIconsContainer">
                    <NotificationsNone/>
                    <span className="topIconBag">2</span>
                </div>
                <div className="topbarIconsContainer">
                    <Settings/>
                </div>
                <img src={logopj} alt="logo" className="topAvatar" />
            </div>
        </div>
    </div>
  )
}
