import React, { useState, useContext } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

///
import Title from "../../../../../components/title/Title";
import VacantInfo from "../../../../../components/vacantInfo";
import Button from "../../../../../components/button";
import RootContext from "../../../../../context/Context";
import { useEffect } from "react";

///
export default function Cadre({
  setModalActive,
  curVacant,
  loading,
  // vacants,
  services,
  setCurVacant,
  activeIndex,
  setActiveIndex,
}) {
  const { state } = useLocation();
  const { t } = useTranslation();
  const { curtLangId } = useContext(RootContext);
  const [infoVacant, setInfoVacant] = useState(null);
  const [openResInfo, setOpenResInfo] = useState(null);
  // console.log(state.vacancy_id);
  useEffect(() => {
    if (!state?.serves_id || !services.length) return;
    let tempItem = services.find((i) => i.service_id === state.serves_id);

    let resultActiveInfo = tempItem.vacancies.find(
      (j) => j.vacancies_id === state.vacancy_id
    );
    setInfoVacant(resultActiveInfo)
    changeCurrentVacant(tempItem, state.serves_id);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state?.serves_id, services]);

  function handleComplitionForm() {
    setModalActive(true);
  }

  function changeInfoVacant(item, vacancies_id) {
    setInfoVacant(item);
    if (vacancies_id) {
      setOpenResInfo(null);
    }
    setOpenResInfo(vacancies_id);
  }

  function changeCurrentVacant(item, idkey) {
    setActiveIndex(idkey);
    setCurVacant(item);
  }

  useEffect(() => {
    console.log(infoVacant);
  }, [infoVacant]);

  return (
    <StyleCadre>
      <div className="container">
        {loading ? (
          <h1>Loading....</h1>
        ) : (
          <div className="cadre">
            <Title>
              <h4 className="top__title">{t("title_top")}</h4>
              <h3 className="title">{t("navbar_vacanse")}</h3>
            </Title>

            <CardreCategory>
              <div className="category__ul">
                {[...services].map((item, index) => {
                  const {
                    service_name_uz,
                    service_id,
                    service_name_ru,
                    vacancies,
                  } = item;
                  return (
                    <div
                      className="category__li"
                      key={service_id}
                      onClick={() => changeCurrentVacant(item, service_id)}
                    >
                      <span
                        className={
                          activeIndex === service_id ? "active__count" : ""
                        }
                      >
                        {vacancies ? vacancies.length : "0"}
                      </span>
                      <p
                        className={
                          activeIndex === service_id ? "active__text" : ""
                        }
                      >
                        {curtLangId === 1 ? service_name_ru : service_name_uz}
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
                      vacancies_title_ru,
                      createdAt,
                      vacancies_salary,
                      vacancies_time,
                      vacancies_experience,
                      vacancies_working_time,
                      vacancies_work_schedule,
                      vacancies_we_offer_uz,
                      vacancies_description_uz,
                      vacancies_we_offer_ru,
                      vacancies_description_ru,
                    } = wrap;
                    return (
                      <div
                        className="info__each"
                        key={vacancies_id}
                        onClick={() =>
                          changeInfoVacant(wrap, index, vacancies_id)
                        }
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "30px",
                        }}
                      >
                        <div className="card">
                          <div className="card__title">
                            <h3>
                              {curtLangId === 0
                                ? vacancies_title_uz
                                : vacancies_title_ru}
                            </h3>
                            <p>{createdAt.slice(0, 10)}</p>
                          </div>

                          <div className="card__salary">
                            <span>{t("text_salary")}:</span>
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
                            {curtLangId === 0
                              ? vacancies_we_offer_uz.map((value, index) => {
                                  return (
                                    <div
                                      className="card__comment__item"
                                      key={index}
                                    >
                                      <div className="icons">
                                        <i className="icon icon-check-line icon-sm" />
                                      </div>
                                      <div className="text__info">{value}</div>
                                    </div>
                                  );
                                })
                              : vacancies_we_offer_ru.map((value, index) => {
                                  return (
                                    <div
                                      className="card__comment__item"
                                      key={index}
                                    >
                                      <div className="icons">
                                        <i className="icon icon-check-line icon-sm" />
                                      </div>
                                      <div className="text__info">{value}</div>
                                    </div>
                                  );
                                })}
                          </div>
                        </div>
                        <div
                          className={
                            openResInfo === vacancies_id
                              ? "vacant__hidden visibly"
                              : "vacant__hidden"
                          }
                        >
                          <VacantInfo key={vacancies_id}>
                            <div className="profission">
                              {curtLangId === 0
                                ? vacancies_title_uz
                                : vacancies_title_ru}
                            </div>
                            <div className="contant">
                              <h4>{t("text_information")}:</h4>
                              <div className="information">
                                <div className="information__wrap">
                                  <div className="information__wrap__item">
                                    <p className="text__left">
                                      {t("text_profission")}:
                                    </p>
                                    <p className="text__left">
                                      {t("text_experience")}:
                                    </p>
                                    <p className="text__left">
                                      {t("text_salary")}:
                                    </p>
                                    <p className="text__left">
                                      {t("text_work_time")}:
                                    </p>
                                  </div>
                                  <div className="information__wrap__item">
                                    <p className="text__right">
                                      {curtLangId === 0
                                        ? vacancies_title_uz
                                        : vacancies_title_ru}
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
                                    <p className="text__left">
                                      {t("text_work_plan")}:
                                    </p>
                                    <p className="text__left">
                                      {t("text_work_day")}:
                                    </p>
                                  </div>
                                  <div className="information__wrap__item">
                                    <p className="text__right">
                                      {vacancies_time}
                                    </p>
                                    <p className="text__right">
                                      {vacancies_work_schedule}
                                    </p>
                                  </div>
                                </div>
                              </div>

                              <div className="responsibilities">
                                <h2>{t("details_and_oligations")}:</h2>
                                <p>
                                  {curtLangId === 0
                                    ? vacancies_description_uz
                                    : vacancies_description_ru}
                                </p>
                              </div>

                              <Button onClick={handleComplitionForm}>
                                {t("application_title")}
                              </Button>
                            </div>
                          </VacantInfo>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {infoVacant ? (
                  <VacantInfo desktop>
                    <div className="profission">
                      {curtLangId === 0
                        ? infoVacant?.vacancies_title_uz
                        : infoVacant?.vacancies_title_ru}
                    </div>
                    <div className="contant">
                      <h4>{t("text_information")}:</h4>
                      <div className="information">
                        <div className="information__wrap">
                          <div className="information__wrap__item">
                            <p className="text__left">
                              {t("text_profission")}:
                            </p>
                            <p className="text__left">
                              {t("text_experience")}:
                            </p>
                            <p className="text__left">{t("text_salary")}:</p>
                            <p className="text__left">{t("text_work_time")}:</p>
                          </div>
                          <div className="information__wrap__item">
                            <p className="text__right">
                              {curtLangId === 0
                                ? infoVacant?.vacancies_title_uz
                                : infoVacant?.vacancies_title_ru}
                            </p>
                            <p className="text__right">
                              {infoVacant?.vacancies_experience}
                            </p>
                            <p className="text__right">
                              {infoVacant?.vacancies_salary}
                            </p>
                            <p className="text__right">
                              {infoVacant?.vacancies_working_time}
                            </p>
                          </div>
                        </div>

                        <div className="information__wrap">
                          <div className="information__wrap__item">
                            <p className="text__left">{t("text_work_plan")}:</p>
                            <p className="text__left">{t("text_work_day")}:</p>
                          </div>
                          <div className="information__wrap__item">
                            <p className="text__right">
                              {infoVacant?.vacancies_working_time}
                            </p>
                            <p className="text__right">
                              {infoVacant?.vacancies_work_schedule}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="responsibilities">
                        <h2>{t("we_offer")}:</h2>
                        <p>
                          {curtLangId === 0
                            ? infoVacant?.vacancies_description_uz
                            : infoVacant?.vacancies_description_ru}
                        </p>
                      </div>

                      <Button onClick={handleComplitionForm}>
                        {t("application_title")}
                      </Button>
                    </div>
                  </VacantInfo>
                ) : (
                  curVacant?.vacancies[0] && (
                    <VacantInfo desktop>
                      <div className="profission">
                        {curtLangId === 0
                          ? curVacant?.vacancies[0]?.vacancies_title_uz
                          : curVacant?.vacancies[0]?.vacancies_title_ru}
                      </div>
                      <div className="contant">
                        <h4>{t("text_information")}:</h4>
                        <div className="information">
                          <div className="information__wrap">
                            <div className="information__wrap__item">
                              <p className="text__left">
                                {t("text_profission")}:
                              </p>
                              <p className="text__left">
                                {t("text_experience")}:
                              </p>
                              <p className="text__left">{t("text_salary")}:</p>
                              <p className="text__left">
                                {t("text_work_time")}:
                              </p>
                            </div>
                            <div className="information__wrap__item">
                              <p className="text__right">
                                {curtLangId === 0
                                  ? curVacant?.vacancies[0]?.vacancies_title_uz
                                  : curVacant?.vacancies[0]?.vacancies_title_ru}
                              </p>
                              <p className="text__right">
                                {curVacant?.vacancies[0]?.vacancies_experience}
                              </p>
                              <p className="text__right">
                                {curVacant?.vacancies[0]?.vacancies_salary}
                              </p>
                              <p className="text__right">
                                {
                                  curVacant?.vacancies[0]
                                    ?.vacancies_working_time
                                }
                              </p>
                            </div>
                          </div>

                          <div className="information__wrap">
                            <div className="information__wrap__item">
                              <p className="text__left">
                                {t("text_work_plan")}:
                              </p>
                              <p className="text__left">
                                {t("text_work_day")}:
                              </p>
                            </div>
                            <div className="information__wrap__item">
                              <p className="text__right">
                                {
                                  curVacant?.vacancies[0]
                                    ?.vacancies_working_time
                                }
                              </p>
                              <p className="text__right">
                                {
                                  curVacant?.vacancies[0]
                                    ?.vacancies_work_schedule
                                }
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="responsibilities">
                          <h2>{t("we_offer")}:</h2>
                          <p>
                            {curtLangId === 0
                              ? curVacant?.vacancies[0]
                                  ?.vacancies_description_uz
                              : curVacant?.vacancies[0]
                                  ?.vacancies_description_ru}
                          </p>
                        </div>

                        <Button onClick={handleComplitionForm}>
                          {t("application_title")}
                        </Button>
                      </div>
                    </VacantInfo>
                  )
                )}
              </div>
            </CardreCategory>
          </div>
        )}
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
    gap: 66px;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0;
    }
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
    &__item {
      display: flex;
      flex-direction: column;
      gap: 25px;
      max-height: 800px;
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
            display: none;
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
