import React from "react";
import styled from "styled-components";

const DefaultInput = styled.input`
  width: 100%;
  text-align: center;
  font-size: 20px;
`;

const Input = ({value, hidden, placeholder, onInputChange}) => {
  return <DefaultInput hidden={hidden} onChange={onInputChange} value={value} placeholder={placeholder} />;
}

export default Input;
