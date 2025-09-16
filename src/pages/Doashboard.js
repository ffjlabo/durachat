import React, {useState} from "react";
import styled from "styled-components";

import AvatorForm from "../components/AvatorForm";
import Chat from "./Chat";

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: black;
`;

const Dashboard = () => {
  const [name, setName] = useState("No Name");
  const [icon, setIcon] = useState("");
  const [entered, setEnterd] = useState(false);
  const [mode, setMode] = useState(null); // null:未選択, 'ai':AI, 'user':通常

  // モード選択画面
  if (!mode) {
    return (
      <LoginWrapper>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <h2>モードを選択してください</h2>
          <button style={{ margin: 10, padding: "10px 30px" }} onClick={() => setMode('ai')}>AIとチャット</button>
          <button style={{ margin: 10, padding: "10px 30px" }} onClick={() => setMode('user')}>誰かとチャット</button>
        </div>
      </LoginWrapper>
    );
  }

  // ログイン画面
  if (!entered) {
    return (
      <LoginWrapper>
        <AvatorForm name={name} icon={icon} setName={setName} setIcon={setIcon} setEntered={setEnterd} />
      </LoginWrapper>
    );
  }

  // チャット画面
  return <Chat avator={{ name, icon }} aiMode={mode === 'ai'} />;
};

export default Dashboard;
