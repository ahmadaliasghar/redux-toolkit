import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from 'react'
import { fetchPosts, getPostsError, getPostsStatus, selectAllPosts } from "./postSlice";
import PostView from "./PostView";


const PostsList = () => {
    const dispatch = useDispatch();
    const posts = useSelector(selectAllPosts)
    const postsStatus = useSelector(getPostsStatus);
    const postsError = useSelector(getPostsError);

    useEffect(()=> {
        if(postsStatus === 'idle') {
            dispatch(fetchPosts());
        }   
    }, [postsStatus, dispatch])

    let content;
    if(postsStatus === 'loading') {
        content = <p>Loading...</p>
    } else if(postsStatus === 'succeeded') {
        const orderedPosts = [...posts].sort((a, b) => b.time.localeCompare(a.time));
        content = orderedPosts.map((post)=> (<PostView key={post.id} post={post} />))
    } else {
        content = postsError;
    }

    return (
        <section>
            <h2>Posts</h2>
            {content}
        </section>
    );
}

export default PostsList;
