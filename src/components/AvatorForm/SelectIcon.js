import React, { useEffect } from "react";
import styled from "styled-components";

import {iconImages} from "../../utils/iconSetting";

const Icon = styled.img.attrs(({src}) => ({src}))`
  width: 60px;
  height: 60px;
  filter: brightness(${({selected}) => selected ? "100" : "70"}%);
  border: solid 3px ${({selected}) => selected ? "white" : "black"};
`;

const SelectBox = ({src, selected, setIcon}) => <Icon src={src} selected={selected} onClick={() => setIcon(src)}/>;

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
          iconImages.map((img) => <SelectBox src={img} selected={img == icon} setIcon={setIcon}/>)
        }
      </IconField>
  )
};

export default SelectIcon;
