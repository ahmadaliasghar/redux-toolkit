import { useSelector } from "react-redux";
import { showAllPosts } from "../slice/PostSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButton from "./ReactionButton";

const PostList = () => {
  const posts = useSelector(showAllPosts);
  console.log(posts, "postsposts")
  const orderedPost  = posts.slice().sort((a,b)=> b.time.localeCompare(a.time))
  const showPosts = orderedPost.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <p>
        <PostAuthor userId={post.userId} />
        <TimeAgo timeStamp={post.time}/> 
      </p>
      <ReactionButton post={post} />
    </article>
  ));

  return (
    <div>
      <section>
        <h2>Posts</h2>
        {showPosts}
      </section>
    </div>
  );
};

export default PostList;
