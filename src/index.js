import React from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";

import Form from "./components/Form";
import Logs from "./components/Logs";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  bottom: 100vh;
`;

const App = () => (
  <Wrapper>
    <Form />
    <Logs />
  </Wrapper>
);

ReactDOM.render(<App />, document.getElementById('app'));
