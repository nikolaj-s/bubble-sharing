import React from 'react'

import "./DownloadButton.css";

export const DownloadButton = () => {

    const [mouseDown, toggleMouseDown] = React.useState(false);

    const handleAction = () => {
        window.open("https://github.com/nikolaj-s/bubble-voice/releases/download/v0.9.90/Bubble-Setup-0.9.90.exe")
    }

    return (
        <div 
        onClick={handleAction}
        onMouseDown={() => {toggleMouseDown(true)}}
        onMouseUp={() => {toggleMouseDown(false)}}
        onMouseLeave={() => {toggleMouseDown(false)}}
        style={{
            transform: mouseDown ? 'scale(0.95)' : 'scale(1)'
        }}
        className='download-button'>
            <p>Download The App</p>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 20L8.75 13.75L10.5 11.9375L13.75 15.1875V5H16.25V15.1875L19.5 11.9375L21.25 13.75L15 20ZM7.5 25C6.8125 25 6.22417 24.7554 5.735 24.2663C5.24583 23.7771 5.00083 23.1883 5 22.5V18.75H7.5V22.5H22.5V18.75H25V22.5C25 23.1875 24.7554 23.7763 24.2663 24.2663C23.7771 24.7563 23.1883 25.0008 22.5 25H7.5Z" fill="#F8F8F8"/>
            </svg>
        </div>
    )
}
