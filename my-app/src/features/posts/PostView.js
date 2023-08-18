import React from 'react'
import ShowAuthor from './ShowAuthor'
import TimeAgo from './TimeAgo'
import ReactionButtons from './ReactionButtons'

const PostView = ({post}) => {
  return (
  <article>
    <h3>{post.title}</h3>
    <p>{post.body}</p>
    <p className="postCredit">
        <ShowAuthor userID={post.userId}/>
        <TimeAgo timestamp={post.time}/>
        <ReactionButtons post={post}/>
    </p>
</article>
  )
}

export default PostView
