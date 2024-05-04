import React from 'react'

import "./SimpleImageCarousel.css";

export const SimpleImageCarousel = ({images = [], expand, maxWidth, nsfw}) => {
    
    const [index, setIndex] = React.useState(0);

    const accentColor = "rgb(57, 62, 70)";

    const glassColor = "rgba(34, 40, 49, 0.8)";

    const textColor = "white";

    const incr = () => {
        if (index < images.length - 1) {
            setIndex(index+1)
        } else {
            setIndex(0);
        }
    }

    const decr = () => {
        if (index > 0) {
            setIndex(index-1)
        } else {
            setIndex(images.length - 1);
        }
    }
    
    return (
        <div 
        style={{backgroundColor: 'black', maxWidth: maxWidth, borderRadius: 10, overflow: 'hidden'}}
        className='simple-image-carousel-container'>
            <img objectFit='contain' src={images[index]} />
            <div style={{backgroundColor: accentColor}} onClick={decr} className='decr-control'></div>
            <div style={{backgroundColor: accentColor}} onClick={incr} className='incr-control'></div>
            <div 
            style={{backgroundColor: glassColor}}
            className='position-indicator-wrapper'>
                {images.map((item, key) => {
                    return <div onClick={() => {setIndex(key)}} style={{width: 12, height: 5, flexShrink: 0, borderRadius: 5, backgroundColor: key === index ? textColor : accentColor, margin: '2px'}} ></div>
                })}
            </div>
        </div>
    )
}
