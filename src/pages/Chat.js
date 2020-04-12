import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import io from "socket.io-client";

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
  const [chatLog, setChatLog] = useState([
    {name: "甘楽", icon, text: "甘楽ちゃんでーーーーーす!!!!"},
    {name: "甘楽", icon, text: "甘楽ちゃんでーーーーーす!!!!"},
    {name: "甘楽", icon, text: "甘楽ちゃんでーーーーーす!!!!"},
    {name: "甘楽", icon, text: "甘楽ちゃんでーーーーーす!!!!"},
    {name: "甘楽", icon, text: "甘楽ちゃんでーーーーーす!!!!"},
    {name: "甘楽", icon, text: "甘楽ちゃんでーーーーーす!!!!"}
  ]);

  const avator = {name: "甘楽", icon};
  const socket = io(":8080");

  const handleSubmit = (text) => {
    socket.emit("addPost", {avator, text});
  };

  const addPost = (avator, text) => {
    const post = {
      name: avator.name,
      icon: avator.icon,
      text
    };

    setChatLog([post, ...chatLog]);
  };

  useEffect(() => {
    socket.on("receivePost", ({avator, text}) => {
      addPost(avator, text);
    });
  }, []);

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}/>
      <Logs data={chatLog}/>
    </Wrapper>
  );
};

export default Chat;
