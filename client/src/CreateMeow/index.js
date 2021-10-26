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
    const [formData, setFormData] = useState ({
        content: '',
    });

    function handleCreate(event) {
            event.preventDefault()
              const createMeow = {
                content: formData.content,
              };
              fetch(`http://localhost:3000/posts`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(createMeow),
              })
                .then((r) => r.json())
                .then(data => console.log(data))
                // .then(setIsEditing((isEditing) => !isEditing),
                }

            
        
        function handleChange(event) {
            setFormData({
                ...formData,
                [event.target.name]: event.target.value,
            });
        }
    return (
        <Wrapper>
            <Content>
            {isEditing ?
            <Form>
            <form onSubmit = {handleCreate}>
                <Input>
                    <label htmlFor="createmeow">CREATE MEOW:</label>
                        <input type = "text" value={formData.content} onChange={handleChange} name="content" />
                </Input>
                <Button>
                        <button type="submit">✅</button>
                </Button>
            </form>    
            </Form>
        :
                <Input>
                    <Button>
                        <button onClick={() => setIsEditing((isEditing) => !isEditing)}>Meow Now!🐈</button> 
                    </Button>
                </Input>}
        </Content> 
    </Wrapper>
    );
};
export default CreateMeow 