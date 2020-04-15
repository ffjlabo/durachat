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

  return entered ? <Chat avator={{name, icon}}/> : 
    <LoginWrapper>
      <AvatorForm name={name} icon={icon} setName={setName} setIcon={setIcon} setEntered={setEnterd} />;
    </LoginWrapper>
};

export default Dashboard;
