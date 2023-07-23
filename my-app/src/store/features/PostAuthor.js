import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { showUsers } from "../slice/UserSlice";
const PostAuthor = ({ userId }) => {
  const user = useSelector(showUsers);
  const author = user.find((user) => user.id === userId);
  return <span>
    by {author ? author.name : "Unknown author"}
  </span>;
};

export default PostAuthor;
