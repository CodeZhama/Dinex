import React, { useContext } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
//
import RootContext from "../../../../../context/Context";
import Title from "../../../../../components/title/Title";
import Quadrat from "../../../../../assets/image/quadrat.png";

//
export default function OurServes({ loading, typeServec }) {
  const { curtLangId } = useContext(RootContext);
  const navigate = useNavigate();
  const { t } = useTranslation();

  function rootToService(url) {
    navigate(url);
  }

  return (
    <StyleOurServes>
      <div className="container">
        {loading ? (
          <h1>Loading....</h1>
        ) : (
          <div className="home__serves">
            <GridImg>
              <div className="grid__left">
                <Title ourserves>
                  <h4 className="top__title">{t("title_top")}</h4>
                  <h2 className="title">{t("title_center")}</h2>
                  <p className="info">{t("title_bottom")}</p>
                </Title>

                {typeServec.map((item) => {
                  const {
                    service_id,
                    service_image,
                    service_name_uz,
                    service_name_ru,
                  } = item;

                  return (
                    <div
                      className="card"
                      key={service_id}
                      onClick={() => rootToService("serveces")}
                    >
                      <img
                        className="card__tape"
                        src={Quadrat}
                        alt="quadrats"
                      />
                      <img
                        className="card__img"
                        src={"http://admin.dinex.uz/files/" + service_image}
                        alt="img"
                      />
                      <p className="card__effect__text">Batafsil ma’lumot</p>
                      <div className="card__title">
                        <div className="card__title__text">
                          <h4>{t("nicely_comfortable")}</h4>
                          <h2>
                            {curtLangId === 1
                              ? service_name_ru
                              : service_name_uz}
                          </h2>
                        </div>
                        <div className="card__title__icon">
                          <i className="icon icon-arrow-right icon-sm" />
                        </div>
                      </div>
                      <div className="card__opacity"></div>
                    </div>
                  );
                })}

                <Title ourservesTwo>
                  <h4 className="top__title">{t("title_top")}</h4>
                  <p className="info">{t("title_bottom")}</p>
                </Title>
              </div>
            </GridImg>
          </div>
        )}
      </div>
    </StyleOurServes>
  );
}

const StyleOurServes = styled.div`
  padding: 160px 0 121px 0;
  @media (max-width: 1024px) {
    padding: 120px 0;
  }
  @media (max-width: 600px) {
    padding: 60px 0 0 0;
  }
`;

const GridImg = styled.div`
  .grid__left {
    -webkit-column-count: 2;
    -moz-column-count: 2;
    column-count: 2;
    -webkit-column-width: 50%;
    -moz-column-width: 50%;
    column-width: 50%;
    column-gap: 175px;
    .card {
      position: relative;
      display: inline-block;
      overflow: hidden;
      margin-bottom: 175px;
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

  @media (max-width: 1024px) {
    gap: 80px;
    .grid__left {
      gap: 20px;
      .card {
        margin-bottom: 80px;
        .card__img {
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

  @media (max-width: 768px) {
    .grid__left {
      column-width: 100%;
      column-count: 1;
      .card {
        margin-bottom: 50px;
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
`;
