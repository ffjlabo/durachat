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
  const [aiModel, setAiModel] = useState("");
  const [aiModelSelected, setAiModelSelected] = useState(false);

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

  // AIモード: モデル選択画面
  if (mode === 'ai' && !aiModelSelected) {
    return (
      <LoginWrapper>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <h2>AIモデルを選択してください</h2>
          <select value={aiModel} onChange={e => setAiModel(e.target.value)} style={{ margin: 10, padding: "10px 30px" }}>
            <option value="">選択してください</option>
            <option value="gpt-3.5">GPT-3.5</option>
            <option value="gpt-4">GPT-4</option>
            <option value="other">その他</option>
          </select>
          <button
            style={{ margin: 10, padding: "10px 30px" }}
            onClick={() => aiModel && setAiModelSelected(true)}
            disabled={!aiModel}
          >
            次へ
          </button>
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
  return <Chat avator={{ name, icon }} aiMode={mode === 'ai'} aiModel={aiModel} />;
};

export default Dashboard;
