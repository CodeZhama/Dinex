import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
//
import bg from "../../../../../assets/image/vacansy.png";
import BackRouter from "../../../../../components/backRouter";
import ShowcaseTitle from "../../../../../components/showcaseTitle";
//
const ShowcaseVacant = () => {
  const { t } = useTranslation();
  return (
    <StyleShowcaseVacant>
      <div className="container">
        <div className="vacant__section">
          <BackRouter>{t("navbar_vacanse")}</BackRouter>

          <ShowcaseTitle vacantPage>
            <h4>{t("competent_team")}</h4>
            <h1 className="purposi">{t("showcase_vacancy_title_desc")}</h1>
            <p className="comment">{t("showcase__description")}</p>
          </ShowcaseTitle>
        </div>
      </div>
    </StyleShowcaseVacant>
  );
};

const StyleShowcaseVacant = styled.div`
  padding: 100px 0 320px 0;
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export default ShowcaseVacant;
