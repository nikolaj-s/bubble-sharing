import React from 'react'

export const NsfwImageOverlay = ({borderRadius = '10px', height = '100%'}) => {

    const textColor = 'white';

    const glassColor = 'rgb(34, 40, 49)';

    return (
        <div 
        onClick={(e) => {e.stopPropagation(); e.currentTarget.style.display = 'none'}}
        style={{
            position: 'absolute',
            zIndex: 1,
            bottom: 0,
            left: 0,
            width: '100%',
            height: height,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: glassColor,
            objectFit: 'contain',
            borderRadius: borderRadius,
            
            flexDirection: 'column',
            cursor: 'pointer',
            minWidth: 100
        }}
        className='nsfw-image-overlay'>
            <svg width="80" height="80" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_346_4)">
            <path d="M15 2.5C21.9037 2.5 27.5 8.09625 27.5 15C27.5 21.9037 21.9037 27.5 15 27.5C8.09625 27.5 2.5 21.9037 2.5 15C2.5 8.09625 8.09625 2.5 15 2.5ZM15 18.75C14.6685 18.75 14.3505 18.8817 14.1161 19.1161C13.8817 19.3505 13.75 19.6685 13.75 20C13.75 20.3315 13.8817 20.6495 14.1161 20.8839C14.3505 21.1183 14.6685 21.25 15 21.25C15.3315 21.25 15.6495 21.1183 15.8839 20.8839C16.1183 20.6495 16.25 20.3315 16.25 20C16.25 19.6685 16.1183 19.3505 15.8839 19.1161C15.6495 18.8817 15.3315 18.75 15 18.75ZM15 7.5C14.6938 7.50004 14.3983 7.61244 14.1695 7.81589C13.9407 8.01934 13.7946 8.29969 13.7587 8.60375L13.75 8.75V16.25C13.7504 16.5686 13.8723 16.875 14.0911 17.1067C14.3098 17.3384 14.6087 17.4778 14.9267 17.4965C15.2448 17.5151 15.558 17.4117 15.8023 17.2072C16.0466 17.0027 16.2036 16.7126 16.2413 16.3962L16.25 16.25V8.75C16.25 8.41848 16.1183 8.10054 15.8839 7.86612C15.6495 7.6317 15.3315 7.5 15 7.5Z" fill="#F8F8F8"/>
            </g>
            <defs>
            <clipPath id="clip0_346_4">
            <rect width="30" height="30" fill="white"/>
            </clipPath>
            </defs>
            </svg>

            <h3 style={{color: textColor, pointerEvents: 'none', textAlign: 'center', margin: "0 0 2px 0px", fontSize: '1.8rem'}}>NSFW</h3>
            <p style={{color: textColor, pointerEvents: 'none', textAlign: 'center', margin: 0, fontSize: '1.4rem'}}>Click to Reveal</p>
            
        </div>
    )
}
