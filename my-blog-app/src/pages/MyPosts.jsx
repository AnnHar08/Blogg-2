import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { BlogContext } from "../context/BlogContext";
import BlogPost from "../components/BlogPost";

const MyPosts = () => {
  const { user } = useContext(UserContext);
  const { posts, addPost } = useContext(BlogContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleAddPost = () => {
    addPost(title, content, user.username);
    setTitle("");
    setContent("");
  };

  return (
    <div>
      <h1>My Posts</h1>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button onClick={handleAddPost}>Add Post</button>
      </div>
      {posts
        .filter((post) => post.author === user.username)
        .map((post) => (
          <BlogPost key={post.id} post={post} />
        ))}
    </div>
  );
};

export default MyPosts;
