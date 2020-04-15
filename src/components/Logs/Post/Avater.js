import React from "react";
import styled from "styled-components";

const Icon = styled.img.attrs(({src}) => ({src}))`
  width: 60px;
  height: 60px;
`;

const Name = styled.div`
  text-align: center;
  word-wrap: break-word;
  color: white;
`;

const Wrapper = styled.div`
  display: inline-block;
  text-align: center;
  vertical-align: top;
  width: 100px;
`;

const Avater = ({className, icon, name}) => (
  <Wrapper className={className}>
    <Icon src={icon}/>
    <Name>{name}</Name>
  </Wrapper>
);

export default Avater;
