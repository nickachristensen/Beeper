import React, { useState, useEffect } from "react";

//Component
import Profile from "../Profile";

const ProfileContainer = () => {
  const [posts, setPosts] = useState([]);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [toggle, setToggle] = useState(true);

  const getProfileList = async () => {
    fetch("/me")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data.fullname);
        setPosts(data.posts);
        setName(data.fullname);
        setUsername(data.username);
      });
  };

  useEffect(() => {
    getProfileList();
  }, [toggle]);

  function handleDelete(deletedPost) {
    const updatedPosts = posts.filter((item) => item.id !== deletedPost.id);
    setPosts(updatedPosts);
  }
  console.log(posts);

  const postList = posts.map((post) => {
    return (
      <Profile
        key={post.id}
        post={post}
        onDelete={handleDelete}
        setToggle={setToggle}
        name={name}
        username={username}
      />
    );
  });

  return (
    <div>
      <div className="post-container">{postList}</div>
    </div>
  );
};

export default ProfileContainer;
