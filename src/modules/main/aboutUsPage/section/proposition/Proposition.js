import React from "react";
import styled from "styled-components";

///

import bg from "../../../../../assets/image/Petition.png";
import Logo from "../../../../../assets/image/LogoBg.png";
import Application from "../../../../../components/application";
import ForApp from "../../../../../components/forApp";

///

export default function Proposition() {
  return (
    <StyleProposition>
      <div className="container">
        <ForApp>
          <div className="for__app">
            <div className="logo__text">
              <img src={Logo} alt="logo" />
              <h3>Biz bilan yorqin kelajak quring!</h3>
            </div>
            <Application />
          </div>
        </ForApp>
      </div>
    </StyleProposition>
  );
}

const StyleProposition = styled.div`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 100px 0;
  @media (max-width: 1024px) {
    padding: 60px 0;
  }
`;
