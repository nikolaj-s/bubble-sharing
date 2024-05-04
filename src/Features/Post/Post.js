import React from 'react';

import "./Post.css";
import { useDispatch, useSelector } from 'react-redux';
import { FetchPost, selectLoadingPost, selectPost, selectPostErrorMessage, selectPostErrorState } from './PostSlice';

import "./Post.css";
import { Loading } from '../../Components/Loading/Loading';
import { UserImage } from './UserImage/UserImage';
import { UserInfo } from './UserInfo/UserInfo';
import { ConvertTime } from '../../Util/ConvertTime';
import { Content } from './Content/Content';
import { Error } from './Error/Error';

export const Post = () => {

    const dispatch = useDispatch();

    const loading = useSelector(selectLoadingPost);

    const [date, setDate] = React.useState("");

    const post = useSelector(selectPost);

    const error = useSelector(selectPostErrorState);

    const errorMessage = useSelector(selectPostErrorMessage);

    React.useEffect(() => {

        dispatch(FetchPost());

    }, [window.location.pathname])

    React.useEffect(() => {

        if (post?.message?.content?.date) {

            const local_date = new Date(post?.message?.content?.date);

            const day = local_date.getDate();

            const month = local_date.getMonth();

            const year = local_date.getFullYear();

            setDate(`${day}/${month + 1}/${year} at ${ConvertTime(local_date)}`);
        }

    }, [post])
   
    return (
        <div className='shared-post-container'>
            
            {loading ?
            null :
            error ?
            <Error errorMessage={errorMessage} />
             :
            <>
            <UserImage user={post?.user} />
            <div className='post-content-wrapper'>
                <UserInfo user={post?.user} date={date} />
                <Content nsfw={post?.message?.nsfw} message={post?.message?.content} />
            </div>
            </>
            }
            {loading ? <Loading /> : null}
        </div>
    )
}
