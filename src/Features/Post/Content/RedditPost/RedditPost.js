import React from 'react'

import "./RedditPost.css";

import { SimpleImageCarousel } from '../SimpleImageCarousel/SimpleImageCarousel';

import { Iframe } from '../Iframe/Iframe';

export const RedditPost = ({data = {}, action, disableMax, inSocial}) => {

    const [hover, toggleHover] = React.useState(false);

    const textColor = 'white';

    const primaryColor = "rgb(34, 40, 49)";

    const openOriginal = (e) => {

        e.preventDefault();

        let url = "https://www.reddit.com" + data.permalink;
       
        window.open(url)
        
    }

    const openAlt = (e) => {

        e.preventDefault();

        let url = data.url;
      
        window.open(url)
        
    }

    return (
        <div
        onMouseEnter={() => {toggleHover(true)}}
        onMouseLeave={() => {toggleHover(false)}}
        onClick={(e) => {e.preventDefault()}} 
        style={{
            backgroundColor: inSocial ? null : hover ? primaryColor : null,
            padding: inSocial ? 0 : null,
            marginBottom: inSocial ? 5 : null,
            borderRadius: inSocial ? 0 : null
        }}
        className='reddit-post-container'>
                <div className='reddit-post-info-container'>
                    <div className='reddit-post-info-wrapper'>
                        <h3 
                        onClick={openOriginal}
                        style={{color: textColor, margin: 0, fontSize: 15, opacity: 0.8, fontWeight: 400}}>{data?.subreddit_name_prefixed}</h3>
                        <div 
                        style={{width: 5, height: 5, borderRadius: '50%',
                        flexShrink: 0, backgroundColor: textColor, opacity: 0.8, margin: '0 5px'}}
                        />
                        <p 
                        onClick={openAlt}
                        style={{color: textColor, margin: 0, opacity: 0.8, fontSize: '0.8rem'}}>{data.domain}</p>
                    </div>
                  
                </div>
                <p className='reddit-post-title' style={{color: textColor, marginBottom: 4, marginTop: 0}}>{data.title}</p>
                {data.selftext?.length > 1 ?
                <p className='reddit-post-title' style={{color: textColor}} >{data.selftext}</p>
                : null}
                <div className='reddit-media-container'>
                    {data?.thumbnail && data?.thumbnail?.startsWith('https://') ?
                    <img className='background-blur-red-effect' src={data.thumbnail} />
                    : null}
                    
                    {data?.secure_media_embed && (data.domain.includes('youtu')) ?
                    <Iframe link={data?.secure_media_embed?.media_domain_url} />
                    :
                    data.url.includes('.gifv') || data.url.includes('.mp4') || data.url.includes('redgifs') || data.url.includes('gfycat') || data.media?.reddit_video ? 
                    <video controls={true} src={data.url.includes('.gifv') ? data.url.split('.gifv')[0] + '.mp4' : data.preview?.reddit_video_preview?.fallback_url || data.media?.reddit_video?.fallback_url} />
                    : data.gallery_data ?
                    <SimpleImageCarousel expand={action} images={data.gallery_data.items.map(id => `https://i.redd.it/${id.media_id}.jpg`)} />
                    : (data.url.includes('.jpg') || data.url.includes('.png') || data.url.includes('.webp') || data.url.includes('.gif') || data.url.includes('.jpeg')) && data.url.startsWith('https') ?
                    <img  height={inSocial ? 350 : 500} borderRadius={20} expandContent={() => {action(data.url)}} objectFit='contain' cursor='pointer' image={data.url} />
                    : null}
                    
                </div>

        </div>
    )
}
 