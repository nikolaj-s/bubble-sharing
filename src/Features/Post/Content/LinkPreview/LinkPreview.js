import React from 'react'

import "./LinkPreview.css";

export const LinkPreview = ({data, expand}) => {

    const primaryColor = "rgb(57, 62, 70)";

    const textColor = 'white';

    return (
        <div 
        style={{
            backgroundColor: primaryColor
        }}
        className='link-preview-container'>
            <div className='image-link-preview-wrapper'>
               {data.images.length === 0 ? null : <img loadingState='eager' objectFit='contain' cursor='pointer' image={data?.images[0]} /> }
            </div>
            <div className='link-info-preview-wrapper'>
                <h3 style={{color: textColor}} >{data?.title}</h3>
                <p style={{color: textColor}}>{data?.description}</p>
            </div>
        </div>
    )
}
