import React from "react";
import styled from "styled-components";
//
import bg from "../../../../../assets/image/servesbg2.png";
import Logo from "../../../../../assets/image/LogoBg.png";
import Application from "../../../../../components/application";
import ForApp from "../../../../../components/forApp";

//
export default function LeaveApp() {
  return (
    <StyleLeaveApp>
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
    </StyleLeaveApp>
  );
}

const StyleLeaveApp = styled.div`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 100px 0;
  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

