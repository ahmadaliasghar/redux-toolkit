import { useSelector } from "react-redux";
import { showAllPosts } from "../slice/PostSlice";

const PostList = () => {
  const posts = useSelector(showAllPosts);
  const showPosts = posts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
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
