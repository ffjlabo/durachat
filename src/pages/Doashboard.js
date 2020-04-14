import React, {useState} from "react";
import styled from "styled-components";

import AvatorForm from "../components/AvatorForm";
import Chat from "./Chat";

const IconField = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  max-width: 270px;
  max-height: 330px;
`;

const Dashboard = () => {
  const [name, setName] = useState("No Name");
  const [icon, setIcon] = useState("");
  const [entered, setEnterd] = useState(false);

  return entered ? <Chat avator={{name, icon}}/> : <AvatorForm name={name} icon={icon} setName={setName} setIcon={setIcon} setEntered={setEnterd} />;
};

export default Dashboard;
