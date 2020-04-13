import React, {useState} from "react";
import styled from "styled-components";

import Chat from "./Chat";
import img_01 from "../../assets/img/durachat-icon-01.jpg";
import img_02 from "../../assets/img/durachat-icon-02.jpg";
import img_03 from "../../assets/img/durachat-icon-03.jpg";
import img_04 from "../../assets/img/durachat-icon-04.jpg";
import img_05 from "../../assets/img/durachat-icon-05.jpg";
import img_06 from "../../assets/img/durachat-icon-06.jpg";
import img_07 from "../../assets/img/durachat-icon-07.jpg";
import img_08 from "../../assets/img/durachat-icon-08.jpg";
import img_09 from "../../assets/img/durachat-icon-09.jpg";
import img_10 from "../../assets/img/durachat-icon-10.jpg";
import img_11 from "../../assets/img/durachat-icon-11.jpg";
import img_12 from "../../assets/img/durachat-icon-12.jpg";
import img_13 from "../../assets/img/durachat-icon-13.jpg";
import img_14 from "../../assets/img/durachat-icon-14.jpg";
import img_15 from "../../assets/img/durachat-icon-15.jpg";
import img_16 from "../../assets/img/durachat-icon-16.jpg";
import img_17 from "../../assets/img/durachat-icon-17.jpg";
import img_18 from "../../assets/img/durachat-icon-18.jpg";
import img_19 from "../../assets/img/durachat-icon-19.jpg";
import img_20 from "../../assets/img/durachat-icon-20.jpg";

const IconField = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  max-width: 270px;
  max-height: 330px;
`;

const Icon = styled.img.attrs(({src}) => ({src}))`
  width: 60px;
  height: 60px;
`;

const SelectBox = ({src, setIcon}) => <Icon src={src} onClick={() => setIcon(src)}/>;

const Dashboard = () => {
  const [name, setName] = useState("");
  const [icon, setIcon] = useState("");
  const [entered, setEnterd] = useState(false);

  if (entered) {
    return <Chat avator={{name, icon}}/>;
  }

  return (
    <>
      <IconField>
        <SelectBox src={img_01} setIcon={setIcon}/>
        <SelectBox src={img_02} setIcon={setIcon}/>
        <SelectBox src={img_03} setIcon={setIcon}/>
        <SelectBox src={img_04} setIcon={setIcon}/>
        <SelectBox src={img_05} setIcon={setIcon}/>
        <SelectBox src={img_06} setIcon={setIcon}/>
        <SelectBox src={img_07} setIcon={setIcon}/>
        <SelectBox src={img_08} setIcon={setIcon}/>
        <SelectBox src={img_09} setIcon={setIcon}/>
        <SelectBox src={img_10} setIcon={setIcon}/>
        <SelectBox src={img_11} setIcon={setIcon}/>
        <SelectBox src={img_12} setIcon={setIcon}/>
        <SelectBox src={img_13} setIcon={setIcon}/>
        <SelectBox src={img_14} setIcon={setIcon}/>
        <SelectBox src={img_15} setIcon={setIcon}/>
        <SelectBox src={img_16} setIcon={setIcon}/>
        <SelectBox src={img_17} setIcon={setIcon}/>
        <SelectBox src={img_18} setIcon={setIcon}/>
        <SelectBox src={img_19} setIcon={setIcon}/>
        <SelectBox src={img_20} setIcon={setIcon}/>
      </IconField>
      <input hidden value={icon}/>
      <input value={name} onChange={(e) => setName(e.target.value)}/>
      <button onClick={() => setEnterd(true)}>Enter</button>
    </>
  );
};

export default Dashboard;
