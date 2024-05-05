import React from 'react'
import { MessageText } from './MessageText/MessageText'
import { MessageLink } from './MessageLink/MessageLink'
import { LinkPreview } from './LinkPreview/LinkPreview'
import { VideoCard } from './VideoCard/VideoCard'
import { RedditPost } from './RedditPost/RedditPost'
import { Iframe } from './Iframe/Iframe'
import { MessageGallery } from './MessageGallery/MessageGallery'
import { Video } from './Video/Video'

import "./Content.css";
import { NsfwImageOverlay } from './NsfwImageOverlay/NsfwImageOverlay'

export const Content = ({message ={}, nsfw}) => {

    const handleOpenImageInNewTab = (src) => {
        window.open(src);
    }

    return (
        <>
        {message?.emoji ?
        <h2 className='emoji-reaction-mesage'>{message.emoji}</h2>
        : null}
        
        {message?.text?.length === 0 ? null :
        <MessageText loading={message.loading} style={message.textStyle} color={'white'} text={message.text} />
        }
        {(message.image || message.video || message.iFrame || message.reddit) || message.gallery ? null : <MessageLink link={message.link} />
        }
        {message.link_preview && !message.media_video ?
        <LinkPreview expand={() => {}} data={message.link_preview} />
        : null}
        <div className='message-content-wrapper'>
            {message?.media_video?.url ?
            <VideoCard message={true} data={message.media_video}  />
            : null}
            
            {message.reddit ?
            <RedditPost action={() => {}} inSocial={true} data={message.reddit} />
            : null}
            {message.media_video ? null :
            <Iframe maxWidth={550} marginRight={5}  link={message.iFrame} />}
            <MessageGallery gallery={message.gallery} />
            
            {
            message.image && !message.gallery ? 
            <img onClick={(e) => {handleOpenImageInNewTab(e.target.src)}} className='message-image' src={message.image}  />
            : null}
            {message.video ? 
            <div 
            style={{maxHeight: '100%'}}
            className='message-outer-video-container'>
                
                <Video maxHeight={'100%'} id={message.local_id} video={message.video} />
            </div>
            : null}
            {nsfw ?
            <NsfwImageOverlay />
            : null}
        </div>
    
        </>
    )
}
