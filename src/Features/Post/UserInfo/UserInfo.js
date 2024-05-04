
import React from 'react';

import "./UserInfo.css";

export const UserInfo = ({user = {}, date}) => {
    
    return (
        <div className='user-info-container'>
            <h2>{user.display_name}</h2>
            <p>{date}</p>
        </div>
    )

}
