import React from "react";
import styled from "styled-components";
import icon from "../../../../assets/img/durachat-icon-02.jpg";

const Icon = styled.img.attrs({
  src: icon
})`
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

const Avater = () => (
  <Wrapper>
    <Icon />
    <Name>甘楽</Name>
  </Wrapper>
);

export default Avater;
