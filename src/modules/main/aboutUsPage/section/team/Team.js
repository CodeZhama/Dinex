import React, { useContext } from "react";
import styled from "styled-components";
import RootContext from "../../../../../context/Context";
//
import team from "./static";
import Quadrat from "../../../../../assets/image/quadrat.png";
//
export default function Team() {
  const { curtLangId } = useContext(RootContext);
  return (
    <StyleTeam>
      <div className="container">
        <TeamGrid>
          {team.map((value) => {
            const { id, prof, firsName, image, prof_ru, firsName_ru } = value;
            return (
              <div className="team__card" key={id}>
                <img className="team__image" src={image} alt={image} />
                <div className="about__team">
                  <div className="proffision">
                    <i className="icon icon-line-prof" />
                    <h4>{curtLangId === 0 ? prof : prof_ru}</h4>
                  </div>
                  <h3>{curtLangId === 0 ? firsName : firsName_ru}</h3>
                </div>
                <img className="stiker" src={Quadrat} alt="quadrat" />
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
    .team__image {
      transition: 0.2s linear;
      width: 100%;
      transform: scale(1.1);
    }
    .about__team {
      width: 90%;
      bottom: 0;
      left: 0;
      position: absolute;
      background-color: var(--light);
      padding: 20px 0 26px 31px;
      transition: 0.1s linear;
      .proffision {
        margin-bottom: 10px;
        display: flex;
        opacity: 0.7;
        align-items: center;
        gap: 8px;
        h4 {
          font-size: 14px;
          font-weight: 600;
          line-height: 19px;
          letter-spacing: -0.02em;
          transition: 0.2s linear;
        }
        i {
          position: absolute;
          left: -30px;
          width: 14px;
        }
      }
      h3 {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 24px;
        font-weight: 600;
        line-height: 33px;
        letter-spacing: 0em;
      }
    }
    .stiker {
      position: absolute;
    }

    &:hover {
      .team__image {
        transform: scale(1.2);
      }
      .about__team {
        width: 100%;
        .proffision {
          h4 {
            margin-left: 26px;
          }
          i {
            left: 32px;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    .team__card {
      .about__team {
        padding: 15px 0 10px 31px;
        .proffision{
          margin-bottom: 5px;
        }
        h3{
          font-size: 20px;
        }
      }
    }
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;
