import React from "react";
import styled from "styled-components";

import TextArea from "./TextArea";
import Button from "./Button";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  textarea {
    margin-bottom: 10px;
  }
`;

const Form = () => (
  <Wrapper>
      <TextArea />
      <Button>POST!</Button>
  </Wrapper>
)

export default Form;
