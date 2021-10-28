import React, { useState } from "react";

//Style
import { Button, Form, Input } from "./Reply.styles";

function Reply({ reply, onDelete, toggle, setToggle }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    message: reply.message,
  });

  function handleDelete() {
    onDelete(reply);
    fetch(`/reply/${reply.id}`, {
      method: "DELETE",
    });
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
  }
  
  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }
  return (
    <>
      <div>
        <h6>{reply.user.fullname}</h6>
      </div>
      {isEditing ? (
        <Form>
          <form onSubmit={handleEdit}>
            <Input>
              <label htmlFor="editreply">EDIT REPLY:</label>
              <input
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
        <>
          <p>"{reply.message}"</p>
        </>
      )}
      <Button>
        <button onClick={() => setIsEditing((isEditing) => !isEditing)}>
          ✏️
        </button>
        <button onClick={handleDelete}>🗑️</button>
      </Button>
    </>
  );
}
export default Reply;
