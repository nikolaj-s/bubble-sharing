import React from 'react';

import "./VideoCard.css";

export const VideoCard = ({mediaOfTheDay,data = {}, send = () => {}, altAction, message}) => {

    const [hover, toggleHover] = React.useState(false);


    const textColor = "white";
    
    const accentColor = "rgb(57, 62, 70)";

    const primaryColor = "rgb(34, 40, 49)";

    React.useEffect(() => {

        if (!data.video_preview) return;

        const video_el = document.getElementById(data.video_preview);

        if (video_el) {
            if (hover) {
                video_el.play();
            } else {
                video_el.pause();
                video_el.currentTime = 0;
                video_el.load();
            }
        }

    }, [hover]);

    const openLink = () => {
        
        window.open(data.url)
        
    }

    const open = () => {
       
        
    }

    return (
        <div 
        onClick={open}
        style={{
            zIndex: mediaOfTheDay ? 2 : null,
            backgroundColor: hover ? accentColor : primaryColor,
            borderRadius: mediaOfTheDay ? 0 : null
        }}
        onMouseEnter={() => {toggleHover(true)}}
        onMouseLeave={() => {toggleHover(false)}}
        className='video-card-outer-container'>
            <div className='video-card-thumbnail-container'>
                {data.video_preview ?
                <video 
                id={data.video_preview}
                controls={false}
                playsInline={true}
                muted={true}
                
                src={data.video_preview}
                poster={data.thumbnail}
                />
                :
                <img src={data.thumbnail} />
                }
                
            </div>
            <div className='video-card-details-container'>
                <h3 style={{color: textColor}}>{data.title}</h3>
                <div onClick={(e) => {e.stopPropagation(); openLink()}} className='copy-video-card-link-container'>
                    <p style={{color: textColor, margin: 0, opacity: 0.8}}>{data?.url?.split('/')[2]}</p>
                </div>
                <p style={{color: textColor}}>{data.duration}</p>
                
                
            </div>       
        </div>
    )
}
