import React from 'react';
import styled from "styled-components";

import Form from "../components/Form";
import Logs from "../components/Logs";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  bottom: 100vh;
`;

const Chat = () => (
  <Wrapper>
    <Form />
    <Logs />
  </Wrapper>
);

export default Chat;
