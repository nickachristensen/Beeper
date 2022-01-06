import React, { useState } from "react";

//Style
import { Button, Form, Input, Content } from "./Reply.styles";

function Reply({ post, reply, onReplyDelete, toggle, setToggle }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    message: reply.message,
  });

  function handleDelete() {
    onReplyDelete(reply);
    fetch(`/replies/${reply.id}`, {
      method: "DELETE",
    });
    window.location.reload();
  }

  function handleEdit(event) {
    event.preventDefault();
    const editReply = {
      message: formData.message,
    };
    fetch(`/replies/${reply.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editReply),
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
      {isEditing ? (
        <Form>
          <form onSubmit={handleEdit}>
            <Input>
              <label htmlFor="editreply">EDIT REPLY:</label>
              <textarea
                type="text"
                value={formData.message}
                onChange={handleChange}
                name="message"
              />
            </Input>
            <Button>
              <button type="submit">✅</button>
            </Button>
          </form>
        </Form>
      ) : (
        <Content>
            <h6>{reply.user} Meowed:</h6>
            <p>"{reply.message}"</p>
        </Content>
      )}
      <Button>
        <button onClick={() => setIsEditing((isEditing) => !isEditing)}>
          ✏️
        </button>
        <button onClick={handleDelete}>🗑️</button>
        <button onClick={() => console.log(reply)}>Test</button>
      </Button>
    </>
  );
}
export default Reply;