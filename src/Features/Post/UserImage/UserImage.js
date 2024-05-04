import React from 'react'

import "./UserImage.css";

export const UserImage = ({user = {}}) => {

    return (
        <div className='user-image-container'>
            <div style={{width: 5, height: '100%', backgroundColor: user.color}} />
            <div style={{
                borderRadius: user?.shape === 'square' ? '5px' : '50%'
            }} className='user-image-wrapper'>
                <img alt='user-image' src={user.user_image} />
            </div>
        </div>
    )
}
