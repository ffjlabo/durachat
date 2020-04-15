import React from "react";
import styled from "styled-components";

const Text = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: top;
  padding: 15px 20px;
  color: white;
  background: linear-gradient(0deg, #ED7207 0%, #ED7207 50%, #F9B329 50%, #F9B329 100%);
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
    background-color: #F9B329;
    border-style: solid;
    border-color: white;
    border-width: 4px;
    border-right: none;
    border-bottom: none;
  }
`;

const SpeechBubble = ({text}) => <Text>{text}</Text>;

export default SpeechBubble;
