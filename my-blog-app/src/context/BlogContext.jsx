import React, { createContext, useState } from "react";

const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "First Post",
      author: "Jane Doe",
      content: "This is the content of the first post.",
      comments: [{ username: "user1", text: "Nice post!" }],
    },
  ]);

  const addPost = (title, content, author) => {
    const newPost = {
      id: posts.length + 1,
      title,
      content,
      author,
      comments: [],
    };
    setPosts([...posts, newPost]);
  };

  const updatePost = (id, updatedContent) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, content: updatedContent } : post
      )
    );
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const addComment = (postId, comment) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? { ...post, comments: [...post.comments, comment] }
          : post
      )
    );
  };

  return (
    <BlogContext.Provider
      value={{ posts, addPost, updatePost, deletePost, addComment }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export { BlogContext, BlogProvider };
