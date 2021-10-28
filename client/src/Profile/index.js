import React, { useState, useEffect } from "react";

// Styles
import { Wrapper, Content, Body, Header, Avatar } from "./Profile.styles";

const Profile = ({ post, name, username }) => {
  const { content } = post;

  return (
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
    </Wrapper>
  );
};

export default Profile;
