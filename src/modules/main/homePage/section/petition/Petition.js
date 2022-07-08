import React from "react";
import styled from "styled-components";
//
import bg from "../../../../../assets/image/Petition.png";
import Logo from "../../../../../assets/image/LogoBg.png";
import Application from "../../../../../components/application";
import ForApp from "../../../../../components/forApp";
import { useTranslation } from "react-i18next";
//

export default function Petition() {
  const { t } = useTranslation();
  return (
    <StylePetition>
      <div className="container">
        <ForApp>
          <div className="for__app">
            <div className="logo__text">
              <img src={Logo} alt="logo" />
              <h3>{t("logo_description")}</h3>
            </div>
            <Application />
          </div>
        </ForApp>
      </div>
    </StylePetition>
  );
}

const StylePetition = styled.div`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 100px 0;
  
  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;
