import React from "react";

// Styles
import { Wrapper, Content, Body, Header, Avatar } from "./Profile.styles";

const Profile = ({ post }) => {
  const { content } = post;

  return (
    <Wrapper>
      <Content>
        <Body>
          <Avatar src="https://www.wpbeginner.com/wp-content/uploads/2012/08/gravatarlogo.jpg" />
          <h3>
            
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
