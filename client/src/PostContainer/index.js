import React, { useState, useEffect } from "react";
import Post from "../Post";

const PostContainer = () => {
  const [posts, setPosts] = useState([]);

  const getPostList = async () => {
    fetch("/posts")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      });
  };

  useEffect(() => {
    getPostList();
  }, []);

  
  function handleDelete(deletedPost) {
    const updatedPosts = posts.filter(item => item.id !== deletedPost.id)
    setPosts(updatedPosts)
  }
  
  const postList = posts.map((post) => {
    return <Post key={post.id} post={post} onDelete={handleDelete}/>;
  });

  return (
    <div>
      <div className="post-container">{postList}</div>
    </div>
  );
};

export default PostContainer;
