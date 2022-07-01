import React from "react";
import styled from "styled-components";
import Api from "../../../../../services/api";
//
import Title from "../../../../../components/title/Title";
import Img1 from "../../../../../assets/image/servesImg.png";
import Img2 from "../../../../../assets/image/servesImg2.png";
import Quadrat from "../../../../../assets/image/quadrat.png";
import { useEffect } from "react";
//
export default function OurServes() {

  async function getServecesData() {
    try {
      const {data} = await Api.get("");
      if (data) {
        console.log(data);
      } else {
        console.lof("Malumot topilmadi");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getServecesData();
  }, []);

  return (
    <StyleOurServes>
      <div className="container">
        <div className="home__serves">
          {/* */}
          <GridImg>
            <div className="grid__left">
              <Title ourserves>
                <h4 className="top__title">Sizlar uchun </h4>
                <h2 className="title">Bizning Xizmatlar</h2>
                <p className="info">
                  Bizlar siz uchun eng zamonaviy xizmatlarni taklif qilamiz
                </p>
              </Title>

              {/*  */}

              <div className="card__list">
                <div className="card card__short__left">
                  <img className="card__tape" src={Quadrat} alt="quadrats" />
                  <img className="card__img" src={Img1} alt="img" />
                  <p className="card__effect__text">Batafsil ma’lumot</p>
                  <div className="card__title">
                    <div className="card__title__text">
                      <h4>Yoqimli va qulay</h4>
                      <h2>Exteryer dizayn</h2>
                    </div>
                    <div className="card__title__icon">
                      <i className="icon icon-arrow-right icon-sm" />
                    </div>
                  </div>
                  <div className="card__opacity"></div>
                </div>
                {/*  */}
                <div className="card">
                  <img className="card__tape" src={Quadrat} alt="quadrats" />
                  <img className="card__img" src={Img2} alt="img" />
                  <p className="card__effect__text">Batafsil ma’lumot</p>
                  <div className="card__title">
                    <div className="card__title__text">
                      <h4>Yoqimli va qulay</h4>
                      <h2>Exteryer dizayn</h2>
                    </div>
                    <div className="card__title__icon">
                      <i className="icon icon-arrow-right icon-sm" />
                    </div>
                  </div>
                  <div className="card__opacity"></div>
                </div>
                {/*  */}
                <div className="card card__short__left">
                  <img className="card__tape" src={Quadrat} alt="quadrats" />
                  <img className="card__img" src={Img1} alt="img" />
                  <p className="card__effect__text">Batafsil ma’lumot</p>
                  <div className="card__title">
                    <div className="card__title__text">
                      <h4>Yoqimli va qulay</h4>
                      <h2>Exteryer dizayn</h2>
                    </div>
                    <div className="card__title__icon">
                      <i className="icon icon-arrow-right icon-sm" />
                    </div>
                  </div>
                  <div className="card__opacity"></div>
                </div>
              </div>
            </div>

            <div className="grid__right">
              <div className="card__list">
                <div className="card">
                  <img className="card__tape" src={Quadrat} alt="quadrats" />
                  <img className="card__img " src={Img1} alt="img" />
                  <p className="card__effect__text">Batafsil ma’lumot</p>
                  <div className="card__title">
                    <div className="card__title__text">
                      <h4>Yoqimli va qulay</h4>
                      <h2>Exteryer dizayn</h2>
                    </div>
                    <div className="card__title__icon">
                      <i className="icon icon-arrow-right icon-sm" />
                    </div>
                  </div>
                  <div className="card__opacity"></div>
                </div>
                {/*  */}
                <div className="card card__short__right">
                  <img className="card__tape" src={Quadrat} alt="quadrats" />
                  <img className="card__img" src={Img1} alt="img" />
                  <p className="card__effect__text">Batafsil ma’lumot</p>
                  <div className="card__title">
                    <div className="card__title__text">
                      <h4>Yoqimli va qulay</h4>
                      <h2>Exteryer dizayn</h2>
                    </div>
                    <div className="card__title__icon">
                      <i className="icon icon-arrow-right icon-sm" />
                    </div>
                  </div>
                  <div className="card__opacity"></div>
                </div>
                {/*  */}
                <div className="card ">
                  <img className="card__tape" src={Quadrat} alt="quadrats" />
                  <img className="card__img " src={Img1} alt="img" />
                  <p className="card__effect__text">Batafsil ma’lumot</p>
                  <div className="card__title">
                    <div className="card__title__text">
                      <h4>Yoqimli va qulay</h4>
                      <h2>Exteryer dizayn</h2>
                    </div>
                    <div className="card__title__icon">
                      <i className="icon icon-arrow-right icon-sm" />
                    </div>
                  </div>
                  <div className="card__opacity"></div>
                </div>
              </div>

              <Title ourservesTwo>
                <h4 className="top__title">Sizlar uchun </h4>
                <p className="info">
                  Bizlar siz uchun eng zamonaviy xizmatlarni taklif qilamiz
                </p>
              </Title>
            </div>
          </GridImg>
          {/* */}
        </div>
      </div>
    </StyleOurServes>
  );
}

const StyleOurServes = styled.div`
  padding: 160px 0 121px 0;
  @media (max-width: 1200px) {
    padding: 120px 0;
  }
  @media (max-width: 600px) {
    padding: 60px 0;
  }
`;

const GridImg = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 120px;

  .grid__left,
  .grid__right {
    .card__list {
      display: grid;
      grid-template-columns: 1fr;
      gap: 175px;
      .card__short__right {
        margin-left: 55px;
      }
      /* .card__short__left {
      } */
      .card {
        position: relative;
        display: inline-block;
        overflow: hidden;
        border-radius: 2px;
        filter: drop-shadow(0px 4px 6px rgba(141, 141, 141, 0.15));
        cursor: pointer;

        .card__tape {
          position: absolute;
          bottom: 0;
          right: 0;
          z-index: 1;
          opacity: 0;
        }

        .card__title {
          display: flex;
          align-items: center;
          gap: 34px;
          position: absolute;
          bottom: 0;
          left: 0;
          z-index: 1;
          background-color: var(--light);
          padding: 27px 17px 38px 31px;
          transition: 0.2s linear;
          .card__title__text {
            & > h4 {
              font-size: 14px;
              font-weight: 600;
              line-height: 19px;
              letter-spacing: -0.02em;
              opacity: 0.5;
            }

            & > h2 {
              font-size: 24px;
              font-weight: 600;
              line-height: 33px;
              letter-spacing: 0em;
            }
          }

          .card__title__icon {
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid;
            border-radius: 50%;
            margin-top: 20px;
            i {
              transition: 0.2s linear;
            }
          }
        }

        .card__img {
          width: 100%;
          object-fit: cover;
          transform: scale(1.1);
          transition: 0.12s;
        }

        .card__opacity {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          opacity: 0;
          background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0.5)
          );
          transition: all 0.18s linear;
        }

        .card__effect__text {
          position: absolute;
          bottom: 200px;
          left: -250px;
          color: var(--light);
          font-size: 24px;
          font-weight: 600;
          line-height: 33px;
          transition: 0.2s linear;
          z-index: 1;
        }

        &:hover {
          .card__tape {
            opacity: 1;
          }

          .card__img {
            transform: scale(1.15);
          }
          .card__opacity {
            opacity: 1;
          }
          .card__title {
            padding: 38px 43px 38px 31px;
            .card__title__icon {
              i {
                transform: rotate(-45deg);
              }
            }
          }
          .card__effect__text {
            left: 30px;
          }
        }
      }
    }
  }

  @media (max-width: 1200px) {
    gap: 80px;
    .grid__left,
    .grid__right {
      .card__list {
        grid-template-columns: 1fr;
        gap: 30px;
        .card__short__right {
          margin: 0;
        }
        .card {
          width: 100%;
          .card__img {
            width: 100%;
          }
          .card__tape {
            display: none;
          }
          .card__title {
            padding: 15px 20px 39px 20px;
          }
        }
      }
    }
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    .grid__left,
    .grid__right {
      .card__list {
        .card {
          .card__title {
            padding: 15px 20px 15px 20px;
          }
          &:hover {
            .card__title {
              padding: 20px 30px 20px 20px;
            }
          }
        }
      }
    }
  }
`;
