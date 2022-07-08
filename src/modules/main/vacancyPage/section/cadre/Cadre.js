import React, { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
///

import Title from "../../../../../components/title/Title";
import VacantInfo from "../../../../../components/vacantInfo";
import Button from "../../../../../components/button";
import { useEffect } from "react";
///
export default function Cadre({
  setModalActive,
  curVacant,
  loading,
  vacants,
  services,
  setCurVacant,
}) {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [infoVacant, setInfoVacant] = useState(0);

  function handleComplitionForm() {
    setModalActive(true);
  }
  function changeInfoVacant(item) {
    setInfoVacant(item);
  }
  function changeCurrentVacant(item, index) {
    setActiveIndex(index);
    setCurVacant(item);
  }

  return (
    <StyleCadre>
      <div className="container">
        <div className="cadre">
          <Title>
            <h4 className="top__title">{t("title_top")}</h4>
            <h3 className="title">{t("navbar_vacanse")}</h3>
          </Title>

          <CardreCategory>
            <div className="category__ul">
              {[...services].map((item, index) => {
                const { service_name_uz, service_id } = item;
                return (
                  <div
                    className="category__li"
                    key={service_id}
                    onClick={() => changeCurrentVacant(item, index)}
                  >
                    <span
                      className={activeIndex === index ? "active__count" : ""}
                    ></span>
                    <p className={activeIndex === index ? "active__text" : ""}>
                      {service_name_uz}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="vacant__list">
              <div className="vacant__list__item">
                {curVacant?.vacancies.map((wrap, index) => {
                  const {
                    vacancies_id,
                    vacancies_title_uz,
                    createdAt,
                    vacancies_salary,
                    vacancies_time,
                    vacancies_experience,
                    vacancies_working_time,
                    vacancies_work_schedule,
                    vacancies_we_offer_uz,
                    vacancies_description_uz,
                  } = wrap;
                  return (
                    <div
                      className="info__each"
                      key={vacancies_id}
                      onClick={() => changeInfoVacant(wrap)}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "30px",
                      }}
                    >
                      <div className="card">
                        <div className="card__title">
                          <h3>{vacancies_title_uz}</h3>
                          <p>{createdAt.slice(0, 10)}</p>
                        </div>

                        <div className="card__salary">
                          <span>Maosh:</span>
                          <h3>{vacancies_salary}</h3>
                        </div>

                        <div className="card__work__info">
                          <div className="position">
                            <i className="icon icon-briefcase" />
                            <p>{vacancies_time}</p>
                          </div>
                          <div className="position">
                            <i className="icon icon-time-line" />
                            <p>{vacancies_working_time}</p>
                          </div>
                          <div className="position">
                            <i className="icon icon-briefcase" />
                            <p>{vacancies_work_schedule}</p>
                          </div>
                        </div>
                        <div className="card__comment">
                          {vacancies_we_offer_uz.map((value, index) => {
                            return (
                              <div className="card__comment__item" key={index}>
                                <div className="icons">
                                  <i className="icon icon-check-line icon-sm" />
                                </div>
                                <div className="text__info">{value}</div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <div className="vacant__hidden">
                        <VacantInfo key={vacancies_id}>
                          <div className="profission">{vacancies_title_uz}</div>
                          <div className="contant">
                            <h4>Ma’lumot:</h4>
                            <div className="information">
                              <div className="information__wrap">
                                <div className="information__wrap__item">
                                  <p className="text__left">Lavozim:</p>
                                  <p className="text__left">Tajriba:</p>
                                  <p className="text__left">Maosh:</p>
                                  <p className="text__left">Ish vaqti:</p>
                                </div>
                                <div className="information__wrap__item">
                                  <p className="text__right">
                                    {vacancies_title_uz}
                                  </p>
                                  <p className="text__right">
                                    {vacancies_experience}
                                  </p>
                                  <p className="text__right">
                                    {vacancies_salary}
                                  </p>
                                  <p className="text__right">
                                    {vacancies_working_time}
                                  </p>
                                </div>
                              </div>

                              <div className="information__wrap">
                                <div className="information__wrap__item">
                                  <p className="text__left">Yoshi:</p>
                                  <p className="text__left">Jinsi:</p>
                                  <p className="text__left">Ish reja:</p>
                                  <p className="text__left">Ish kuni:</p>
                                </div>
                                <div className="information__wrap__item">
                                  <p className="text__right"></p>
                                  <p className="text__right"></p>
                                  <p className="text__right"></p>
                                  <p className="text__right"></p>
                                </div>
                              </div>
                            </div>

                            <div className="responsibilities">
                              <h2>Tafsilot va majburiyatlar:</h2>
                              <p>{vacancies_description_uz}</p>
                            </div>

                            <div className="offer">
                              <h2>Biz taklif qilamiz:</h2>
                              <p>{vacancies_description_uz}</p>
                            </div>

                            <Button onClick={handleComplitionForm}>
                              Ariza qoldirish
                            </Button>
                          </div>
                        </VacantInfo>
                      </div>
                    </div>
                  );
                })}
              </div>

              {curVacant?.vacancies[0] && (
                <VacantInfo desktop>
                  <div className="profission">
                    {curVacant?.vacancies[0]?.vacancies_title_uz}
                  </div>
                  <div className="contant">
                    <h4>Ma’lumot:</h4>
                    <div className="information">
                      <div className="information__wrap">
                        <div className="information__wrap__item">
                          <p className="text__left">Lavozim:</p>
                          <p className="text__left">Tajriba:</p>
                          <p className="text__left">Maosh:</p>
                          <p className="text__left">Ish vaqti:</p>
                        </div>
                        <div className="information__wrap__item">
                          <p className="text__right">
                            {curVacant?.vacancies[0]?.vacancies_title_uz}
                          </p>
                          <p className="text__right">
                            {curVacant?.vacancies[0]?.vacancies_experience}
                          </p>
                          <p className="text__right">
                            {curVacant?.vacancies[0]?.vacancies_salary}
                          </p>
                          <p className="text__right">
                            {curVacant?.vacancies[0]?.vacancies_working_time}
                          </p>
                        </div>
                      </div>

                      <div className="information__wrap">
                        <div className="information__wrap__item">
                          <p className="text__left">Yoshi:</p>
                          <p className="text__left">Jinsi:</p>
                          <p className="text__left">Ish reja:</p>
                          <p className="text__left">Ish kuni:</p>
                        </div>
                        <div className="information__wrap__item">
                          <p className="text__right">22 yosh</p>
                          <p className="text__right">Erkak</p>
                          <p className="text__right">222</p>
                          <p className="text__right">222</p>
                        </div>
                      </div>
                    </div>

                    <div className="responsibilities">
                      <h2>Tafsilot va majburiyatlar:</h2>
                      <p>{curVacant?.vacancies[0]?.vacancies_description_uz}</p>
                    </div>

                    <div className="offer">
                      <h2>Biz taklif qilamiz:</h2>
                      <p>{curVacant?.vacancies[0]?.vacancies_description_uz}</p>
                    </div>

                    <Button onClick={handleComplitionForm}>
                      Ariza qoldirish
                    </Button>
                  </div>
                </VacantInfo>
              )}
            </div>
          </CardreCategory>
        </div>
      </div>
    </StyleCadre>
  );
}

const StyleCadre = styled.div`
  padding: 159px 0 135px 0;
  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

const CardreCategory = styled.div`
  .category__ul {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .category__li {
      display: flex;
      align-items: center;
      gap: 9px;
      cursor: pointer;
      & > span {
        background: rgba(0, 33, 118, 0.1);
        border-radius: 5px;
        padding: 3px 5px 4px 5px;
        transition: 0.3 ease-in-out;
      }
      & > .active__count {
        background-color: var(--orange);
        color: var(--light);
      }
      & > p {
        font-size: 18px;
        font-weight: 600;
        line-height: 25px;
        letter-spacing: 0em;
        opacity: 0.4;
        white-space: nowrap;
        transition: 0.3 ease-in-out;
      }
      & > .active__text {
        font-weight: 600;
        color: var(--dark);
        opacity: 1;
      }
    }
  }

  .vacant__list {
    display: flex;
    align-content: flex-start;
    gap: 20px;
    margin-top: 40px;
    min-height: 130vh;

    &__item {
      display: flex;
      flex-direction: column;
      gap: 25px;
      overflow-y: scroll;
      &::-webkit-scrollbar {
        width: 0;
      }
      .info__each {
        .card {
          padding: 30px 20px;
          border: 1px solid #e9e9e9;
          border-radius: 5px;
          cursor: pointer;

          &__title {
            display: flex;
            align-items: center;
            justify-content: space-between;
            & > h3 {
              font-size: 18px;
              font-weight: 600;
              line-height: 25px;
            }
            & > span {
              font-size: 16px;
              font-weight: 600;
              line-height: 22px;
              color: #5a5564;
            }
          }

          &__salary {
            display: flex;
            align-items: center;
            gap: 10px;
            margin: 17px 0;
            & > span {
              font-size: 16px;
              font-weight: 400;
              line-height: 22px;
              margin-right: 10px;
            }
            & > h3 {
              font-size: 16px;
              font-weight: 600;
              line-height: 22px;
            }
          }

          &__work__info {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-bottom: 17px;
            border-bottom: 0.7px solid #c3c3c3;
            margin-bottom: 20px;

            .position {
              display: flex;
              align-items: center;
              gap: 10px;
              padding: 8px 10px;
              background: #f3f2f1;
              border-radius: 5px;

              & > p {
                font-size: 16px;
                font-weight: 600;
                line-height: 22px;
              }
            }
          }

          &__comment {
            display: flex;
            flex-direction: column;
            gap: 10px;
            &__item {
              display: flex;
              gap: 5px;
              .text__info {
                font-size: 16px;
                font-weight: 600;
                line-height: 22px;
                color: #5a5564;
              }

              .icons {
                i {
                  background-color: var(--orange);
                }
              }
            }
          }
        }
        .vacant__hidden {
          display: none;
        }
      }
    }
  }

  @media (max-width: 1024px) {
    .category__ul {
      overflow: auto;
      gap: 0;
      .category__li {
        margin-right: 50px;
      }
      &::-webkit-scrollbar {
        width: 0;
      }
    }
    .vacant__list {
      display: grid;
      grid-template-columns: 1fr;

      &__item {
        .info__each {
          .vacant__hidden {
            &.visibly {
              display: block;
            }
          }
          .card {
            padding: 28px 20px;
            border: 1px solid var(--orange);
            &__title {
              > h3 {
                font-size: 18px;
                line-height: 25px;
                letter-spacing: 0em;
              }
              span {
                font-size: 16px;
                line-height: 22px;
                letter-spacing: 0em;
              }
            }
            &__salary {
              span {
                font-size: 16px;
                line-height: 22px;
                letter-spacing: 0em;
              }
              h3 {
                font-size: 16px;
                line-height: 22px;
                letter-spacing: 0em;
              }
            }
            &__comment {
              &__item {
                .text__info {
                  font-size: 16px;
                  line-height: 22px;
                  letter-spacing: 0em;
                }
              }
            }
          }
        }
      }
    }
  }
  @media (max-width: 600px) {
    .vacant__list {
      &__item {
        .info__each {
          .card {
            width: 100%;
            padding: 22px 10px;
            &__work__info {
              gap: 2px;
              .position {
                p {
                  font-size: 13px;
                  line-height: 18px;
                  letter-spacing: 0em;
                  white-space: nowrap;
                }
              }
            }
          }
        }
      }
    }
  }
`;
