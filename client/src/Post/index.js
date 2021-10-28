import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import Modal from "../Modal";

//Style
import { Wrapper, Body, Header, Button, Content, Form, Input } from "./Post.styles";

const Post = ({ post, onDelete, toggle, setToggle }) => {
  const { content, user } = post;
  const [isOpen, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isReplying, setIsReplying] = useState(false);
  const [formData, setFormData] = useState ({
    content: post.content,
});
const [replyFormData, setReplyFormData] = useState ({
  message: '',
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

  function handleReply(event) {
    event.preventDefault()

      const newReply = {
        message: replyFormData.message,
        user_id: user.id,
        post_id: post.id,
      };

      fetch(`/replies`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newReply),
      })
        .then((r) => r.json())
        .then(setToggle(!toggle));
        setIsReplying((isReplying) => !isReplying);
        setFormData({
          message:"",
      });
    }

    function handleReplyChange(event) {
      setReplyFormData({
          ...replyFormData,
          [event.target.name]: event.target.value,
      });
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
        {isReplying ?
            <Form>
              <form onSubmit = {handleReply}>
                <Input>
                  <label htmlFor="replypost">REPLY TO POST:</label>
                    <input 
                      type = "text" 
                      value={replyFormData.message} 
                      onChange={handleReplyChange} 
                      name="message" />
                </Input>
                <Button>
                  <button type="submit">✅</button>
                </Button>
                </form>
            </Form>
        :
          <>  
          </>
        }
        </Content>
      <Button>
        <button onClick = {() => setIsReplying((isReplying) => !isReplying)}>💬</button>
        <button onClick = {() => setIsEditing((isEditing) => !isEditing)}>✏️</button>
        <button onClick = {handleDelete}>🗑️</button>
      </Button>
      </Modal>
    </Wrapper>
    </>
  );
};

export default Post;
