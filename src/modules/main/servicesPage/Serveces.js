import React, { useState } from "react";
import styled from "styled-components";

///
import Avatar from "./sections/avatar/Avatar";
import Modal from "../../../components/modal";
import Application from "../../../components/application";

import ConnectionUs from "./sections/connectionUs/ConnectionUs";
import TypeServes from "./sections/typeserves/TypeServes";
///
export default function Serveces() {
  window.scrollTo(0, 0);

  const [modalService, SetModalService] = useState(false);

  return (
    <StyleServeces>
      <Avatar SetModalService={SetModalService} />
      <TypeServes />
      <ConnectionUs />
      {modalService ? (
        <Modal close={() => SetModalService(false)}>
          <Application />
        </Modal>
      ) : null}
    </StyleServeces>
  );
}

const StyleServeces = styled.div``;
