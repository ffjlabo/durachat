import React from "react";
import styled from "styled-components";

import SelectIcon from "./SelectIcon";
import Input from "./Input";
import Button from "./Button";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 270px;
`;

const MarginSelectIcon = styled(SelectIcon)`
  margin-bottom: 10px;
`;

const MarginInput = styled(Input)`
  margin-bottom: 10px;
`;

const AvatorForm = ({name, icon, setName, setIcon, setEntered}) => (
    <Wrapper>
      <MarginSelectIcon icon={icon} setIcon={setIcon} />
      <Input hidden value={icon} onInputChange={(e) => setIcon(e.target.value)} />
      <MarginInput placeholder="name" value={name} onInputChange={(e) => setName(e.target.value)} />
      <Button onClick={() => setEntered(true)}>Enter</Button>
    </Wrapper>
);

export default AvatorForm;
