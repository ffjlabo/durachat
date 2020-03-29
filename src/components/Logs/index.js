import React from "react";
import styled from "styled-components";

import Post from "./Post";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background: black;
  overflow: scroll;
`;

const LogsBody = styled.div`
  width: 640px;
`;

const Logs = () => (
  <Wrapper>
    <LogsBody>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </LogsBody>
  </Wrapper>
)

export default Logs;
