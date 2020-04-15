import React from "react";
import styled from "styled-components";

const Text = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: top;
  padding: 15px 20px;
  color: white;
  background: ${
    ({mainColor, subColor}) => `linear-gradient(0deg, ${mainColor} 0%, ${mainColor} 50%, ${subColor} 50%, ${subColor} 100%)`
  };
  border-style: solid;
  border-radius: 15px;
  border-color: white;
  border-width: 4px;
  max-width: 400px;
  word-wrap: break-word;
  white-space: pre-wrap;

  &::before {
    position: absolute;
    top: 6px;
    left: -13px;
    content: "";
    width: 15px;
    height: 15px;
    transform: skew(45deg);
    background-color: ${({subColor}) => subColor};
    border-style: solid;
    border-color: white;
    border-width: 4px;
    border-right: none;
    border-bottom: none;
  }
`;

const SpeechBubble = ({text, mainColor, subColor}) => <Text mainColor={mainColor} subColor={subColor} >{text}</Text>;

export default SpeechBubble;
