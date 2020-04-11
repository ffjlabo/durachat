import React, {useState} from 'react';
import styled from "styled-components";

import Form from "../components/Form";
import Logs from "../components/Logs";

import icon from "../../assets/img/durachat-icon-02.jpg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  bottom: 100vh;
`;

const Chat = () => {
  const chatLog = [
    {name: "甘楽", icon, text: "甘楽ちゃんでーーーーーす!!!!"},
    {name: "甘楽", icon, text: "甘楽ちゃんでーーーーーす!!!!"},
    {name: "甘楽", icon, text: "甘楽ちゃんでーーーーーす!!!!"},
    {name: "甘楽", icon, text: "甘楽ちゃんでーーーーーす!!!!"},
    {name: "甘楽", icon, text: "甘楽ちゃんでーーーーーす!!!!"},
    {name: "甘楽", icon, text: "甘楽ちゃんでーーーーーす!!!!"}
  ];

  const avator = {name: "甘楽", icon};

  return (
    <Wrapper>
      <Form />
      <Logs data={chatLog}/>
    </Wrapper>
  );
};

export default Chat;
