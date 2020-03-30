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

const Post = () => (
  <Wrapper>
    <PostBody>
      <Avater />
      <SpeechBubble>甘楽ちゃんでーーーーーす!!!!</SpeechBubble>
    </PostBody>
  </Wrapper>
);

export default Post;
