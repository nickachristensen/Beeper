import React, { useState, useEffect } from "react";
import Modal from "../Modal";
import Reply from "../Reply";

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
  const [isReplying, setIsReplying] = useState(false);
  const [replies, setReplies] = useState([]);
  const [formData, setFormData] = useState({
    content: post.content,
  });

  const [replyFormData, setReplyFormData] = useState({
    message: "",
  });

  const postReplies = replies.map((item) => (
    <Reply
      key={item.id}
      reply={item}
      onReplyDelete={handleReplyDelete}
      toggle={toggle}
      setToggle={setToggle}
      post={post}
    />
  ));

  function handleDelete() {
    onDelete(post);
    fetch(`posts/${post.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(window.location.reload());
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

  function handleReply(event) {
    event.preventDefault();

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
      message: "",
    });
    window.location.reload();
  }

  function handleReplyChange(event) {
    setReplyFormData({
      ...replyFormData,
      [event.target.name]: event.target.value,
    });
  }

  useEffect(() => {
    fetch(`/posts/${post.id}/replies`)
      .then((r) => r.json())
      .then((replies) => {
        setReplies(replies);
      });
  }, [post, toggle]);
  console.log(replies)

  function handleReplyDelete(deletedReply) {
    const updatedReplies = replies.filter(
      (item) => item.id !== deletedReply.id
    );
    setReplies(updatedReplies);
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
                {user.fullname} | {user.username}
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
                    <button type="submit">✅</button>
                  </Button>
                </form>
              </Form>
            ) : (
              <Header2>
                <p>{content}</p>
                <p>{postReplies}</p>
              </Header2>
            )}
            {isReplying ? (
              <Form>
                <form onSubmit={handleReply}>
                  <Input>
                    <label htmlFor="replypost">REPLY TO POST:</label>
                    <textarea
                      type="text"
                      value={replyFormData.message}
                      onChange={handleReplyChange}
                      name="message"
                    />
                  </Input>
                  <Button>
                    <button type="submit">✅</button>
                  </Button>
                </form>
              </Form>
            ) : (
              <></>
            )}
          </Content2>
          <Button>
            <button onClick={() => setIsReplying((isReplying) => !isReplying)}>
              💬
            </button>
            <button onClick={() => setIsEditing((isEditing) => !isEditing)}>
              ✏️
            </button>
            <button onClick={handleDelete}>🗑️</button>
          </Button>
        </Modal>
      </Wrapper2>
    </>
  );
};

export default Post;
