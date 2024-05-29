import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { BlogContext } from "../context/BlogContext";
import CommentSection from "./CommentSection";

const BlogPost = ({ post }) => {
  const { user } = useContext(UserContext);
  const { updatePost, deletePost } = useContext(BlogContext);
  const [editing, setEditing] = useState(false);
  const [content, setContent] = useState(post.content);

  const handleUpdate = () => {
    updatePost(post.id, content);
    setEditing(false);
  };

  return (
    <div>
      <h2>{post.title}</h2>
      <p>By: {post.author}</p>
      {editing ? (
        <>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button onClick={handleUpdate}>Update</button>
        </>
      ) : (
        <p>{post.content}</p>
      )}
      {user.username === post.author && (
        <div>
          <button onClick={() => setEditing(!editing)}>Edit</button>
          <button onClick={() => deletePost(post.id)}>Delete</button>
        </div>
      )}
      <CommentSection postId={post.id} comments={post.comments} />
    </div>
  );
};

export default BlogPost;
