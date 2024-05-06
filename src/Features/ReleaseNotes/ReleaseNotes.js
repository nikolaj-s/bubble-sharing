import React from 'react';

import "./ReleaseNotes.css";
import { useDispatch, useSelector } from 'react-redux';
import { FetchReleaseNotes, selectLoadingReleaseNotes, selectReleaseNotes, selectReleaseNotesErrorMessage, selectReleaseNotesErrorState } from './ReleaseNotesSlice';
import { Loading } from '../../Components/Loading/Loading';
import { ReleaseNote } from '../../Components/ReleaseNote/ReleaseNote';

export const ReleaseNotes = () => {

    const dispatch = useDispatch();

    const releaseNotes = useSelector(selectReleaseNotes);

    const loading = useSelector(selectLoadingReleaseNotes);

    const error = useSelector(selectReleaseNotesErrorState);

    const errorMessage = useSelector(selectReleaseNotesErrorMessage);

    React.useEffect(() => {

        if (releaseNotes.length > 0) return;

        dispatch(FetchReleaseNotes());
        
    }, [])

    return (
        <div className='release-notes-container'>
            {error ?
            null
            :
            null
            }
            {releaseNotes.length > 0 ?
            releaseNotes.map(releaseNote => {
                return <ReleaseNote key={releaseNote._id} releaseNote={releaseNote} />
            })
            : null}
            {loading ? <Loading /> : null}
        </div>
    )
}
