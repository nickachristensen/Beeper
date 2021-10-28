import React, { useState } from "react";
import Modal from "../Modal";

//Style
import {
  Wrapper,
  Body,
  Header,
  Button,
  Content,
  Form,
  Input,
  Wrapper2,
  Content2,
  Body2,
  Avatar,
  Header2,
} from "./Post.styles";

const Post = ({ post, onDelete, toggle, setToggle }) => {
  const { content, user } = post;
  const [isOpen, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    content: post.content,
  });

  function handleDelete() {
    onDelete(post);
    fetch(`posts/${post.id}`, {
      method: "DELETE",
    })
      .then((res) => {
        res.json();
      })
      .then((res) => window.location.reload());
  }

  function handleEdit(event) {
    event.preventDefault();
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
        <Content onClick={() => setOpen((isOpen) => !isOpen)}>
          <Body>
            <Avatar src="https://www.wpbeginner.com/wp-content/uploads/2012/08/gravatarlogo.jpg" />
            <h3>
              {user.fullname} | @{user.username}
            </h3>
          </Body>
          <Header>
            <p>{content}</p>
          </Header>
        </Content>
      </Wrapper>
      <Wrapper2>
        <Modal isOpen={isOpen} close={() => setOpen(false)}>
          <Content2>
            <Body2>
              <Avatar src="https://www.wpbeginner.com/wp-content/uploads/2012/08/gravatarlogo.jpg" />
              <h3>
                {user.fullname} | @{user.username}
              </h3>
            </Body2>
            {isEditing ? (
              <Form>
                <form onSubmit={handleEdit}>
                  <Input>
                    <label htmlFor="editpost">EDIT POST:</label>
                    <textarea
                      type="text"
                      value={formData.content}
                      onChange={handleChange}
                      name="content"
                    />
                  </Input>
                  <Button>
                    <button type="submit">SAVE</button>
                  </Button>
                </form>
              </Form>
            ) : (
              <Header2>
                <p>{content}</p>
              </Header2>
            )}
          </Content2>
          <Button>
            <button>Reply</button>
            <button onClick={() => setIsEditing((isEditing) => !isEditing)}>
              Edit
            </button>
            <button onClick={handleDelete}>Delete</button>
          </Button>
        </Modal>
      </Wrapper2>
    </>
  );
};

export default Post;
