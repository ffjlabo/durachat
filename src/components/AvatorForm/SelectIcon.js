import React from "react";
import styled from "styled-components";

import {iconImages} from "../../utils/iconSetting";

const Icon = styled.img.attrs(({src}) => ({src}))`
  width: 60px;
  height: 60px;
`;

const SelectBox = ({src, setIcon}) => <Icon src={src} onClick={() => setIcon(src)}/>;

const IconField = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  max-width: 270px;
  max-height: 330px;
`;

const SelectIcon = ({className, icon, setIcon}) => {
  return (
    <IconField className={className}>
        {
          iconImages.map((img) => <SelectBox src={img} setIcon={setIcon}/>)
        }
      </IconField>
  )
};

export default SelectIcon;
