import React from 'react'

import { Helmet } from 'react-helmet'

export const MediaTags = ({post, user}) => {

    let image = "https://res.cloudinary.com/drlkgoter/image/upload/v1707433341/logo512_zjz4vu.png";

    return (
        <Helmet>
        <meta charSet='utf-8' />
        
        <link rel='canonical' href={window.location.href} />
        <meta property='og:image' name='og:image' content={post?.content?.image || user?.user_image || image} />
        <meta name='og:title' content={"Post Shared From Bubble"} />
        <meta property='twitter:image' name='twitter:image' content={post?.content?.image || user?.user_image || image} />
        <meta name='twiiter:title' content={"Post Shared From Bubble"} />
        <meta name="description" content={post?.content?.text?.length > 3 ? post?.content?.text: `posted by: ${user?.display_name}`} />
        <meta name="og:description" content={post?.content?.text?.length > 3 ? post?.content?.text :`posted by: ${user?.display_name}`} />
        <meta name="twitter:description" content={post?.content?.text?.length > 3 ? post?.content?.text  :`posted by: ${user?.display_name}`} />    
        </Helmet> 
    )
}
