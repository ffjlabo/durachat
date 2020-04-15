import React from "react";
import styled from "styled-components";

import Post from "./Post";
import Message from "./Message";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background: black;
  overflow-y: scroll;
  height: 100%;
`;

const LogsBody = styled.div`
  width: 640px;
  height: 100%;
`;

const Logs = ({data}) => (
  <Wrapper>
    <LogsBody>
      {
        data.map(({type, content}) => {
          switch(type) {
            case "post":
              return <Post icon={content.icon} name={content.name} text={content.text} />;
            case "message":
              return <Message>{content.text}</Message>;
          };
        })
      }
    </LogsBody>
  </Wrapper>
)

export default Logs;
