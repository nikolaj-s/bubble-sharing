import React from 'react'

import './Title.css';
import { DownloadButton } from '../Buttons/DownloadButton/DownloadButton';
import { NavigationButton } from './NavigationButton/NavigationButton';

export const Title = () => {
    return (
        <>
        <div 
       
        className='nav-title-bar'>
            <span>
            <h2>BUBBLE</h2>
            <NavigationButton />
            </span>
            
        </div>
        <div style={{
            flexShrink: 0,
            height: 75,
            width: '100%'
        }} />
        </>
    )
}
