import React, { useState, useEffect } from "react";
import Post from "../Post";

const PostContainer = ({ visible, showMoreItem }) => {
  const [posts, setPosts] = useState([]);
  const [toggle, setToggle] = useState(true);
  

  const getPostList = async () => {
    fetch("/posts/")
      .then((resp) => resp.json())
      .then((data) => {
        setPosts(data);
      });
  };

  useEffect(() => {
    getPostList();
  }, [toggle]);

  function handleDelete(deletedPost) {
    const updatedPosts = posts.filter((item) => item.id !== deletedPost.id);
    setPosts(updatedPosts);
  }

  const postList = posts.slice(0, visible).map((post) => {
    return (
      <Post
        key={post.id}
        post={post}
        onDelete={handleDelete}
        setToggle={setToggle}
      />
    );
  });

  return (
    <div>
      <div className="post-container" >{postList}</div>
    </div>
  );
};

export default PostContainer;
