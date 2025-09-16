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
    // 画像とモデル名のリスト
    const aiModels = [
      { key: 'gpt-3.5', name: 'GPT-3.5', img: require('../images/durachat-icon-01.jpg') },
      { key: 'gpt-4', name: 'GPT-4', img: require('../images/durachat-icon-02.jpg') },
      { key: 'other', name: 'その他', img: require('../images/durachat-icon-03.jpg') },
    ];

    return (
      <LoginWrapper>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <h2>AIモデルを選択してください</h2>
          <div style={{ display: "flex", gap: "30px", margin: "30px 0" }}>
            {aiModels.map(model => (
              <div
                key={model.key}
                style={{
                  border: aiModel === model.key ? "3px solid #00f" : "2px solid #ccc",
                  borderRadius: "10px",
                  padding: "10px",
                  cursor: "pointer",
                  textAlign: "center",
                  width: "120px",
                  background: aiModel === model.key ? "#eef" : "#222"
                }}
                onClick={() => setAiModel(model.key)}
              >
                <img src={model.img} alt={model.name} style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "8px" }} />
                <div style={{ marginTop: "10px", color: "#fff" }}>{model.name}</div>
              </div>
            ))}
          </div>
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
