import React from "react";
import styled from "styled-components";
//
import bg from "../../../../../assets/image/vacansy.png";
import BackRouter from "../../../../../components/backRouter";
import ShowcaseTitle from "../../../../../components/showcaseTitle";
//
const ShowcaseVacant = () => {
  return (
    <StyleShowcaseVacant>
      <div className="container">
        <div className="vacant__section">
          <BackRouter>Vakansiyalar</BackRouter>

          <ShowcaseTitle vacantPage>
            <h4>Ahil jamoa!</h4>
            <h1 className="purposi">Biz bilan yorqin kareyrangizni boshlang</h1>
            <p className="comment">
              Uyingiz uchun munosib arxitektura, landshaft, eksteryer va
              interyer xizmatlarini siz aziz mijozlarimiz uchun taklif qilamiz,
              hamda samarali hamkorlikka chorlaymiz
            </p>
          </ShowcaseTitle>
        </div>
      </div>
    </StyleShowcaseVacant>
  );
};

const StyleShowcaseVacant = styled.div`
  padding: 100px 0 0 0;
  width: 100%;
  min-height: 100vh;
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export default ShowcaseVacant;
