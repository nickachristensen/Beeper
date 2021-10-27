import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import Modal from "../Modal";

//Style
import { Wrapper, Body, Header, Button, Content } from "./Post.styles";

const Post = ({ post, onDelete, toggle, setToggle }) => {
  const { content, user } = post;
  const [isOpen, setOpen] = useState(false);

  function handleDelete() {
    onDelete(post)
    fetch(`posts/${post.id}`, {
        method: "DELETE"
    })
    .then((res) => { res.json() }).then(res => window.location.reload());
}
  return (
    <Wrapper>
      <Content onClick={() => setOpen(isOpen => !isOpen)}>
        <Body>
          <Avatar src="https://www.wpbeginner.com/wp-content/uploads/2012/08/gravatarlogo.jpg" />
            <h3>
              {user.fullname} | {user.username}
            </h3> 
        <Header>
          <p>{content}</p>
        </Header>
        </Body> 
      </Content>
      <Modal isOpen={isOpen} close={() => setOpen(false)}>
        <Content>
          <Body>
            <Avatar src="https://www.wpbeginner.com/wp-content/uploads/2012/08/gravatarlogo.jpg" />
              <h3>
                {user.fullname} | {user.username}
              </h3>
          </Body>
          <Header>
            <p>{content}</p>
          </Header>
        </Content>
      <Button>
        <button>Reply</button>
        <button>Edit</button>
        <button onClick = {handleDelete}>Delete</button>
      </Button>
      </Modal>
    </Wrapper>
  );
};

export default Post;
