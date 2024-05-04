import React from 'react'

import './Title.css';
import { DownloadButton } from '../Buttons/DownloadButton';

export const Title = () => {
    return (
        <div 
       
        className='nav-title-bar'>
            <span>
            <h2>BUBBLE</h2>
            {window.location.pathname.includes('post') ?
            <p> | Shared post</p>
            : null}
            </span>
            <div className='button-nav-wrapper'>
                <DownloadButton />
            </div>
        </div>
    )
}
