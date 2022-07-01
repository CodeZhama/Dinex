import React from "react";
import styled from "styled-components";
//
import BackRouter from "../../../../../components/backRouter";
import bg from "../../../../../assets/image/showcase.png";
import ShowcaseTitle from "../../../../../components/showcaseTitle/ShowcaseTitle";

//
export default function ShowcaseAbout() {
  return (
    <StyleShowcase>
      <div className="container">
        <div className="showcase">
          <BackRouter>Biz haqimizda</BackRouter>

          <ShowcaseTitle aboutSection>
            <h4>Munosibini tanlang!</h4>
            <div className="purposi">Bizning kompaniya</div>
            <p className="comment">
              Uyingiz uchun munosib arxitektura, landshaft, eksteryer va
              interyer xizmatlarini siz aziz mijozlarimiz uchun taklif qilamiz,
              hamda samarali hamkorlikka chorlaymiz!
            </p>
          </ShowcaseTitle>
        </div>
      </div>
    </StyleShowcase>
  );
}

const StyleShowcase = styled.div`
  width: 100%;
  padding: 110px 0 290px 0;
  min-height: 100vh;
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
