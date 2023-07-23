import { useDispatch } from "react-redux";
import { reactionsAdded } from "../slice/PostSlice";
const emojis = {
  thumbsUp: "👍",
  wow: "😲",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕️",
};

const ReactionButton = ({ post }) => {
  const dispatch = useDispatch();
  const reactionButtons = Object.entries(emojis).map(([name, emoji]) => {
    return (
      <button key={name} type="button" onClick=
      {() => dispatch(reactionsAdded({ postId: post.id, reaction: name }))}>
        {emoji} {post.reactions[name]}
      </button>
    );
  });
  return <div>{reactionButtons}</div>;
};

export default ReactionButton;
