import React from "react";
import styled from "styled-components";

import Avater from "./Avater";
import SpeechBubble from "./SpeechBubble";
import {iconColors} from "../../../utils/iconSetting";

const Wrapper = styled.div`
  padding: 10px;
`;

const PostBody = styled.div`
  display: inline-block;
  vertical-align: top;
`;

const MarginAvator = styled(Avater)`
  margin-right: 10px;
`;

const Post = ({icon, name, text}) => (
  <Wrapper>
    <PostBody>
      <MarginAvator icon={icon} name={name} />
      <SpeechBubble text={text} mainColor={iconColors[icon].main} subColor={iconColors[icon].sub} />
    </PostBody>
  </Wrapper>
);

export default Post;
