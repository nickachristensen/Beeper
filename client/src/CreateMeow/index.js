import React, { useState } from "react";
import {
  Wrapper,
  Content,
  Form,
  Input,
  Button,
  Account,
  Image,
} from "./CreateMeow.styles";

const CreateMeow = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState([]);

  function handleReset() {
    setContent([]);
  }

  function handleCreate(event) {
    event.preventDefault();
    fetch(`/posts`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setContent(data);
          setContent([]);
        });
      } else {
        res.json().then((errors) => {
          console.error(errors);
        });
      }
    });
  }
  return (
    <Wrapper>
      <Content>
        {isEditing ? (
          <Form>
            <form onSubmit={handleCreate}>
              <Input>
                <label htmlFor="createmeow">CREATE MEOW:</label>
                <input
                  type="text"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  name="content"
                />
              </Input>
              <Button>
                <button type="submit">✅</button>
              </Button>
            </form>
          </Form>
        ) : (
          <Input>
            <Button>
              <button onClick={() => setIsEditing((isEditing) => !isEditing)}>
                Meow Now!🐈
              </button>
            </Button>
          </Input>
        )}
      </Content>
    </Wrapper>
  );
};
export default CreateMeow;
