import React, { useState } from "react";
import styled from "styled-components";
//sections
import Vacansy from "./section/vacancy";
import Showcase from "./section/showcase";
import Partner from "./section/partner";
import Petition from "./section/petition";
import Portfolio from "./section/portfolio";
import OurServes from "./section/ourserves";
import Modal from "../../../components/modal";
import Application from "../../../components/application";
//

export default function Home() {
  const [modal, setModal] = useState(false);

  return (
    <StyleHome>
      <Showcase setModal={setModal} />
      <OurServes />
      <Portfolio />
      <Petition />
      <Partner />
      <Vacansy />
      {modal ? (
        <Modal setModal={setModal}>
          <Application />
        </Modal>
      ) : null}
    </StyleHome>
  );
}

const StyleHome = styled.div``;
