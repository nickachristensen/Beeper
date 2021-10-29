import React, { useState } from "react";

// Styles
import {
  Wrapper,
  Content,
  Body,
  Header,
  Avatar,
  Button,
} from "./Profile.styles";

const Profile = ({ post, name, username, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isReplying, setIsReplying] = useState(false);
  const { content } = post;

  function handleDelete() {
    onDelete(post);
    fetch(`posts/${post.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(window.location.reload());
  }

  
  return (
    <>
      <Wrapper>
        <Content>
          <Body>
            <Avatar src="https://www.wpbeginner.com/wp-content/uploads/2012/08/gravatarlogo.jpg" />
            <h3>
              {name} | @{username}
            </h3>
          </Body>
          <Header>
            <em>{content}</em>
          </Header>
        </Content>
        <Button>
          <button onClick={() => setIsReplying((isReplying) => !isReplying)}>
            💬
          </button>
          <button onClick={() => setIsEditing((isEditing) => !isEditing)}>
            ✏️
          </button>
          <button onClick={handleDelete}>🗑️</button>
        </Button>
      </Wrapper>
    </>
  );
};

export default Profile;
