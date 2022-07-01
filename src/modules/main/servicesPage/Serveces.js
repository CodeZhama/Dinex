import React from "react";
import styled from "styled-components";

///
import Avatar from "./sections/avatar/Avatar";
import ConnectionUs from "./sections/connectionUs/ConnectionUs";
import TypeServes from "./sections/typeserves/TypeServes";
///
export default function Serveces() {
  return (
    <StyleServeces>
      <Avatar />
      <TypeServes />
      <ConnectionUs />
    </StyleServeces>
  );
}

const StyleServeces = styled.div``;
