import React from "react";
import { Avatar } from "@material-ui/core";

//Style
import { Wrapper, Body, Header, Button } from "./Post.styles";

const Post = ({ post }) => {
  const { content, user } = post;
  return (
    <Wrapper>
      <Body>
        <Avatar src="https://www.wpbeginner.com/wp-content/uploads/2012/08/gravatarlogo.jpg" />
        <h3>
          {user.fullname} | {user.username}
        </h3>
      </Body>
      <Header>
        <p>{content}</p>
      </Header>
      <Button>
        <button>Reply</button>
        <button>Edit</button>
        <button>Delete</button>
      </Button>
    </Wrapper>
  );
};

export default Post;
