import React from 'react'

import "./ReleaseNote.css";

export const ReleaseNote = ({releaseNote = {}}) => {
    return (
        <div className='release-note-container'>
            <h2>{releaseNote?.version_name}</h2>
            {releaseNote?.release_notes?.split('.').map(note => {
                return (
                    <li>{note}</li>
                )
            })}
        </div>
    )
}
