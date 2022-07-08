import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
//
import BackRouter from "../../../../../components/backRouter";
import bg from "../../../../../assets/image/showcase.png";
import ShowcaseTitle from "../../../../../components/showcaseTitle/ShowcaseTitle";

//
export default function ShowcaseAbout() {
  const { t } = useTranslation();
  return (
    <StyleShowcase>
      <div className="container">
        <div className="showcase">
          <BackRouter>{t("navbar_about_us")}</BackRouter>

          <ShowcaseTitle aboutSection>
            <h4>{t("showcase__title")}</h4>
            <div className="purposi">{t("showcase_company_txt")}</div>
            <p className="comment">
              {t("showcase__description")}
            </p>
          </ShowcaseTitle>
        </div>
      </div>
    </StyleShowcase>
  );
}

const StyleShowcase = styled.div`
  padding: 110px 0 290px 0;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media (max-width: 768px) {
    min-height: 939px;
  }
  @media (max-width: 600px) {
    min-height: 750px;
  }
`;
