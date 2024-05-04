import React from 'react'

export const MessageLink = ({link}) => {

    const handleLink = (e) => {
        e.preventDefault();

        window.open(link)
        
    }

    return (
        <>
        {link ?
        <a onClick={handleLink} draggable={false} style={{overflow: 'hidden', color: '#2bcade'}} href={link} target="_blank" rel='noreferrer' >{link}</a>
        : null}
        </>
    )
}
