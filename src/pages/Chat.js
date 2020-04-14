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

const Chat = ({avator}) => {
  const [chatLog, setChatLog] = useState([
    {
      type: "post",
      content: {
        name: "甘楽", 
        icon, 
        text: "甘楽ちゃんでーーーーーす!!!!"
      }
    },
    {
      type: "message",
      content: {
        text: "ーー甘楽さんが入室しました"
      }
    }
  ]);

  const socket = io(":8080");

  const handleSubmit = (text) => {
    socket.emit("addPost", {avator, text});
  };

  const addPost = (avator, text) => {
    const log = {
      type: "post",
      content: {
        name: avator.name,
        icon: avator.icon,
        text
      }
    };

    setChatLog(prev => [log, ...prev]);
  };

  const addMessage = (text) => {
    const log = {
      type: "message",
      content: { text }
    };

    setChatLog(prev => [log, ...prev]);
  }

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
