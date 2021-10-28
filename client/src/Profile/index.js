import React, { useState, useEffect } from "react";

// Styles
import { Wrapper, Content, Body, Header, Avatar } from "./Profile.styles";

const Profile = ({ post }) => {
  const { fullname, username, posts } = post;

  return (
    <Wrapper>
      <Content>
        <Body>
          <Avatar src="https://www.wpbeginner.com/wp-content/uploads/2012/08/gravatarlogo.jpg" />
          <h3>
            {fullname} | {username}
          </h3>
        </Body>
        <Header>
          <p>{posts.content}</p>
        </Header>
      </Content>
    </Wrapper>
  );
};

export default Profile;
