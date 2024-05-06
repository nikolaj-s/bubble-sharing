import React from 'react'

import "./WindowsDownloadButton.css";

export const WindowsDownloadButton = () => {

    const [mouseDown, toggleMouseDown] = React.useState(false);

    const download = () => {
        window.open('https://github.com/nikolaj-s/bubble-voice/releases/download/v0.9.86/Bubble-Setup-0.9.86.exe');
    }

    return (
        <div 
        onMouseDown={() => {toggleMouseDown(true)}}
        onMouseUp={() => {toggleMouseDown(false)}}
        onMouseLeave={() => {toggleMouseDown(false)}}
        onClick={download}
        style={{
            transform: mouseDown ? 'scale(0.95)' : "scale(1)"
        }}
        className='windows-download-button'>
            <h3>Download</h3>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_370_2)">
            <path d="M0 0H11.377V11.372H0V0ZM12.623 0H24V11.372H12.623V0ZM0 12.623H11.377V24H0V12.623ZM12.623 12.623H24V24H12.623" fill="#F8F8F8"/>
            </g>
            <defs>
            <clipPath id="clip0_370_2">
            <rect width="24" height="24" fill="white"/>
            </clipPath>
            </defs>
            </svg>
        </div>
    )
}
