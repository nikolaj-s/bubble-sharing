import React from 'react'

import "./MessageGallery.css";

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

export const MessageGallery = ({gallery}) => {

    
    return (
        <>
        {gallery ?
        <ResponsiveMasonry columnsCountBreakPoints={{800: 1, 1000: 2, 1500: 3,}} >
            <Masonry gutter='5px'>
                {gallery.map(img => {
                    return <img src={img} className='gallery-image-source' />
                })}
            </Masonry>
        </ResponsiveMasonry>
        : null}
        </>
    )
}
