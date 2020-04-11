import React from "react";
import styled from "styled-components";

import Avater from "./Avater";
import SpeechBubble from "./SpeechBubble";

const Wrapper = styled.div`
  padding: 10px;
`;

const PostBody = styled.div`
  display: inline-block;
  text-align: center;
`;

const Post = ({icon, name, text}) => (
  <Wrapper>
    <PostBody>
      <Avater icon={icon} name={name} />
      <SpeechBubble>{text}</SpeechBubble>
    </PostBody>
  </Wrapper>
);

export default Post;
