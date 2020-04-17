import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import io from 'socket.io-client';

import Form from '../components/Form';
import Logs from '../components/Logs';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const MarginForm = styled(Form)`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Chat = ({avator}) => {
  const [chatLog, setChatLog] = useState([]);

  const socket = io(':8080');

  const handleSubmit = (text) => {
    socket.emit('addPost', {avator, text});
  };

  const addPost = (avator, text) => {
    const log = {
      type: 'post',
      content: {
        name: avator.name,
        icon: avator.icon,
        text,
      },
    };

    setChatLog((prev) => [log, ...prev]);
  };

  const addMessage = (text) => {
    const log = {
      type: 'message',
      content: {text},
    };

    setChatLog((prev) => [log, ...prev]);
  };

  useEffect(() => {
    socket.on('receivePost', ({avator, text}) => {
      addPost(avator, text);
    });

    socket.on('receiveMessage', (text) => {
      addMessage(text);
    });

    socket.emit('loginUser', avator.name);
  }, []);

  return (
    <Wrapper>
      <MarginForm onSubmit={handleSubmit} />
      <Logs data={chatLog} />
    </Wrapper>
  );
};

export default Chat;
