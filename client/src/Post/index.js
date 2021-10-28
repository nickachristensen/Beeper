import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import Modal from "../Modal";

//Style
import { Wrapper, Body, Header, Button, Content, Form, Input } from "./Post.styles";

const Post = ({ post, onDelete, toggle, setToggle }) => {
  const { content, user } = post;
  const [isOpen, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState ({
    content: post.content,
});

  function handleDelete() {
    onDelete(post)
    fetch(`posts/${post.id}`, {
        method: "DELETE"
    })
    .then((res) => res.json())
    .then(window.location.reload());
}

function handleEdit(event) {
  event.preventDefault()
    const editPost = {
      content: formData.content,
    };
    fetch(`posts/${post.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editPost),
    })
      .then((r) => r.json())
      .then(setToggle(!toggle));
      setIsEditing((isEditing) => !isEditing);
      window.location.reload();
  }

  function handleChange(event) {
    setFormData({
        ...formData,
        [event.target.name]: event.target.value,
    });
}

  return (
    <>
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
          {isEditing ?
            <Form>
              <form onSubmit = {handleEdit}>
                <Input>
                  <label htmlFor="editpost">EDIT POST:</label>
                    <input 
                      type = "text" 
                      value={formData.content} 
                      onChange={handleChange} 
                      name="content" />
                </Input>
                <Button>
                  <button type="submit">✅</button>
                </Button>
                </form>
            </Form>
        :
          <Header>
            <p>{content}</p>
          </Header>
        }
        </Content>
      <Button>
        <button>Reply</button>
        <button onClick = {() => setIsEditing((isEditing) => !isEditing)}>Edit</button>
        <button onClick = {handleDelete}>Delete</button>
      </Button>
      </Modal>
    </Wrapper>
    </>
  );
};

export default Post;
