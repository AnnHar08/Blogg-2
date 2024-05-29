import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { BlogContext } from "../context/BlogContext";

const CommentSection = ({ postId, comments }) => {
  const { user } = useContext(UserContext);
  const { addComment } = useContext(BlogContext);
  const [commentText, setCommentText] = useState("");

  const handleAddComment = () => {
    addComment(postId, { username: user.username, text: commentText });
    setCommentText("");
  };

  return (
    <div>
      <h3>Comments</h3>
      {comments.map((comment, index) => (
        <p key={index}>
          <strong>{comment.username}:</strong> {comment.text}
        </p>
      ))}
      <textarea
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      />
      <button onClick={handleAddComment}>Add Comment</button>
    </div>
  );
};

export default CommentSection;
