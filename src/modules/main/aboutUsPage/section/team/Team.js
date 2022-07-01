import React from "react";
import styled from "styled-components";

//
import team from "./static";
import Quadrat from "../../../../../assets/image/quadrat.png";
//
export default function Team() {
  return (
    <StyleTeam>
      <div className="container">
        <TeamGrid>
          {team.map((value) => {
            const { id, prof, firsName, info, image } = value;
            return (
              <div className="team__card" key={id}>
                <img className="team__image" src={image} alt={image} />
                <div className="about__team">
                  <h4>{prof}</h4>
                  <h3>{firsName}</h3>
                  <p className="info">{info}</p>
                  <img className="stiker" src={Quadrat} alt="quadrat" />
                </div>
              </div>
            );
          })}
        </TeamGrid>
      </div>
    </StyleTeam>
  );
}

const StyleTeam = styled.div`
  padding: 0 0 143px 0;
  @media (max-width: 1024px) {
    padding: 0 0 60px 0;
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  .team__card {
    position: relative;
    cursor: pointer;
    overflow: hidden;
    filter: drop-shadow(0px 4px 6px rgba(141, 141, 141, 0.15));
    .team__image {
      width: 100%;
      object-fit: cover;
      transform: scale(1.1);
    }
    .about__team {
      width: 100%;
      height: 100%;
      position: absolute;
      padding: 20px 94px 0 60px;
      background-color: var(--light);
      top: 74.5%;
      left: -30px;
      transition: 0.2s linear;
      & > h4 {
        font-size: 14px;
        font-weight: 600;
        line-height: 19px;
        margin-bottom: 8px;
        opacity: 0.7;
      }
      & > h3 {
        font-size: 24px;
        font-weight: 600;
        line-height: 33px;
        letter-spacing: 0em;
        margin-bottom: 26px;
      }
      & > p {
        font-size: 16px;
        font-weight: 600;
        line-height: 28px;
      }

      .stiker {
        position: absolute;
        bottom: 0px;
        right: 0;
      }
    }

    &:hover {
      .about__team {
        padding: 63px 31px 45px 31px;
        top: 0;
        left: 0;
        h3 {
          margin-bottom: 13px;
        }
      }
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    .team__card {
      .about__team {
        h4 {
          font-size: 14px;
          font-weight: 600;
          line-height: 19px;
          letter-spacing: -0.02em;
        }
        h3 {
          font-size: 24px;
          font-weight: 600;
          line-height: 33px;
          letter-spacing: 0em;
          margin-bottom: 26px;
        }
        p {
          font-size: 14px;
          font-weight: 600;
          line-height: 26px;
          letter-spacing: 0em;
        }
      }
      &:hover {
        .about__team {
          padding: 28px 29px 0 29px;
          top: 0;
          right: 0;
        }
      }
    }
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 40px;
    .team__card {
      .about__team {
        top: 80%;
        p {
          font-size: 16px;
          font-weight: 600;
          letter-spacing: 0em;
          padding: 0 0 30px;
        }
      }
    }
  }
`;
