import React, {useState} from "react";
import styled from "styled-components";

import TextArea from "./TextArea";
import Button from "./Button";

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;

  textarea {
    margin-bottom: 10px;
  }
`;

const Form = ({onSubmit}) => {
  const [text, setText] = useState("");

  const handleClick = () => {
    onSubmit(text);
  };

  return (
    <Wrapper>
      <TextArea onChange={(e) => setText(e.target.value)}>{text}</TextArea>
      <Button onClick={handleClick}>POST!</Button>
    </Wrapper>
  );
};

export default Form;
