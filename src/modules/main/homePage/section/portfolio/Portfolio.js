import React from "react";
import styled from "styled-components";
//
import Img1 from "../../../../../assets/image/potfolio1.png";
import Img2 from "../../../../../assets/image/portfolio2.png";
import Img3 from "../../../../../assets/image/profolio3.png";
import Img4 from "../../../../../assets/image/protfolio4.png";
import Img5 from "../../../../../assets/image/portfolio5.png";
import Img6 from "../../../../../assets/image/protfolio6.png";
import Img8 from "../../../../../assets/image/response2.png";
import Img9 from "../../../../../assets/image/response1.png";
//
import quadrat from "../../../../../assets/image/quadrat.png";
import EffectImg from "../../../../../components/effectPortfolio";
import Title from "../../../../../components/title";
import Button from "../../../../../components/button";
//
export default function Portfolio() {
  return (
    <StylePortfolio>
      <div className="container">
        <div className="display__none">
          <Title info>
            <h5 className="top__title">Sizlar uchun</h5>
            <h2 className="title">Portfolio</h2>
            <p className="info">
              Mijozlarimiz uchun bajargan eng yaxshi loyihalarimiz
            </p>
          </Title>
          <Button blue>
            <h3>Barcha Loyihalar</h3>
            <i className="icon icon-top-right icon-very-sm " />
          </Button>
        </div>

        <FlexStyle>
          <LeftStyle>
            <EffectImg desktop>
              <div className="inner__style">
                <h4 className="text__effect">Comodo</h4>
                <img className="img__effect" src={quadrat} alt="quadrat" />
              </div>
              <img className="bg__img" src={Img1} alt="img1" />
            </EffectImg>

            <div className="image__left__two">
              <EffectImg>
                <div className="inner__style">
                  <h4 className="text__effect">Comodo</h4>
                  <img className="img__effect" src={quadrat} alt="quadrat" />
                </div>
                <img className="bg__img" src={Img9} alt="img1" />
              </EffectImg>
            </div>

            <div className="image__left__three">
              <EffectImg response>
                <div className="inner__style">
                  <h4 className="text__effect">Comodo</h4>
                  <img className="img__effect" src={quadrat} alt="quadrat" />
                </div>
                <img className="bg__img" src={Img8} alt="img1" />
              </EffectImg>
            </div>

            <div className="projects">
              <h2>+100</h2>
              <h4>Loyihalar</h4>
            </div>
          </LeftStyle>

          <RightStyle>
            <div className="right__top">
              <div className="right__top__image">
                <EffectImg>
                  <div className="inner__style">
                    <h4 className="text__effect">Comodo</h4>
                    <img className="img__effect" src={quadrat} alt="quadrat" />
                  </div>
                  <img className="bg__img" src={Img2} alt="img2" />
                </EffectImg>
              </div>

              <div className="right__top__title">
                <Title info>
                  <h5 className="top__title">Sizlar uchun</h5>
                  <h2 className="title">Portfolio</h2>
                  <p className="info">
                    Mijozlarimiz uchun bajargan eng yaxshi loyihalarimiz
                  </p>
                </Title>
                <Button blue>
                  <h3>Barcha Loyihalar</h3>
                  <i className="icon icon-top-right icon-very-sm " />
                </Button>
              </div>
            </div>

            <div className="right__bottom">
              <div className="right__bottom__left">
                <EffectImg>
                  <img className="bg__img" src={Img3} alt="img2" />
                  <div className="inner__style">
                    <h4 className="text__effect">Comodo</h4>
                    <img className="img__effect" src={quadrat} alt="quadrat" />
                  </div>
                </EffectImg>
              </div>

              <div className="right__bottom__center">
                <EffectImg>
                  <div className="inner__style">
                    <h4 className="text__effect">Comodo</h4>
                    <img className="img__effect" src={quadrat} alt="quadrat" />
                  </div>
                  <img className="bg__img" src={Img4} alt="img2" />
                </EffectImg>

                <EffectImg heigthResponse>
                  <div className="inner__style">
                    <h4 className="text__effect">Comodo</h4>
                    <img className="img__effect" src={quadrat} alt="quadrat" />
                  </div>
                  <img className="bg__img" src={Img5} alt="img5" />
                </EffectImg>
                <EffectImg center>
                  <div className="inner__style">
                    <h4 className="text__effect">Comodo</h4>
                    <img className="img__effect" src={quadrat} alt="quadrat" />
                  </div>
                  <img className="bg__img" src={Img6} alt="img5" />
                </EffectImg>
              </div>

              <div className="right__bottom__right">
                <EffectImg imgSix>
                  <div className="inner__style">
                    <h4 className="text__effect">Comodo</h4>
                    <img className="img__effect" src={quadrat} alt="quadrat" />
                  </div>
                  <img className="bg__img" src={Img6} alt="img2" />
                </EffectImg>
              </div>
            </div>
          </RightStyle>
        </FlexStyle>
      </div>
    </StylePortfolio>
  );
}

const StylePortfolio = styled.div`
  padding: 0 0 140px 0;

  .display__none {
    display: none;
  }
  @media (max-width: 1200px) {
    padding: 120px 0;
  }
  @media (max-width: 768px) {
    padding: 60px 0;
    .display__none {
      display: block;
      margin-bottom: 38px;
    }
  }
`;
const FlexStyle = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  @media (max-width: 450px) {
    gap: 13px;
  }
`;

const LeftStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;

  .image__left__two {
    display: none;
  }
  .image__left__three {
    display: none;
  }

  & > .projects {
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      font-size: 66px;
      font-weight: 400;
      line-height: 45px;
      letter-spacing: -0.02em;
    }
    h4 {
      font-size: 36px;
      font-weight: 400;
      line-height: 45px;
      letter-spacing: -0.02em;
      padding-left: 104px;
    }
  }

  @media (max-width: 1200px) {
    gap: 20px;
    .image__left__two {
      display: block;
      width: 100%;
    }
    .image__left__three {
      display: block;
    }
    .projects {
      align-items: flex-start;
      margin-top: 30px;
      & > h2 {
        font-size: 50px;
        line-height: 45px;
        font-weight: 600;
      }
      & > h4 {
        font-size: 30px;
        font-weight: 600;
        line-height: 45px;
        letter-spacing: -0.02em;
        padding: 0 0 0 70px;
      }
    }
  }
  @media (max-width: 450px) {
    .image__left__three {
      display: none;
    }
    .projects {
      h2 {
        font-size: 30px;
        letter-spacing: -0.02em;
        line-height: 30px;
      }
      h4 {
        font-size: 28px;
        line-height: 40px;
        padding: 0 0 0 40px;
      }
    }
  }
`;

const RightStyle = styled.div`
  .right__top {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 65px;
    margin-bottom: 20px;
  }

  .right__bottom {
    display: flex;
    gap: 20px;
    &__center {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }

  @media (max-width: 1200px) {
    .right__top {
      display: flex;
      gap: 43px;
      flex-direction: column-reverse;
      align-items: flex-start;
    }

    .right__bottom {
      grid-template-columns: 1fr;
      &__left {
        display: none;
      }
      &__center {
        display: grid;
        grid-template-columns: 1fr;
        width: 100%;
      }
      &__right {
        display: none;
      }
    }
  }
  @media (max-width: 450px) {
    .right__top {
      &__title {
        display: none;
      }
    }

    .right__bottom {
      gap: 8px;
    }
  }
`;
