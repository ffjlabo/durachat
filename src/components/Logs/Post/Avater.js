import React from "react";
import styled from "styled-components";

const Icon = styled.img.attrs(({src}) => ({src}))`
  width: 60px;
  height: 60px;
`;

const Name = styled.div`
  text-align: center;
  color: white;
`;

const Wrapper = styled.div`
  display: inline-block;
  vertical-align: top;
`;

const Avater = ({icon, name}) => (
  <Wrapper>
    <Icon src={icon}/>
    <Name>{name}</Name>
  </Wrapper>
);

export default Avater;
