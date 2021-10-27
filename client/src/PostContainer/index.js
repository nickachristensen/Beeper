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
  
  const postList = posts.map((post) => {
    return <Post key={post.id} post={post} />;
  });

  return (
    <div>
      <div className="post-container">{postList}</div>
    </div>
  );
};

export default PostContainer;
