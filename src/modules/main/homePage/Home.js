import React from "react";
import styled from "styled-components";
//sections
import Vacansy from "./section/vacancy";
import Showcase from "./section/showcase";
import Partner from "./section/partner";
import Petition from "./section/petition";
import Portfolio from "./section/portfolio";
import OurServes from "./section/ourserves";
//
export default function Home() {
  return (
    <StyleHome>
      <Showcase />
      <OurServes />
      <Portfolio />
      <Petition />
      <Partner />
      <Vacansy />
    </StyleHome>
  );
}

const StyleHome = styled.div``;
