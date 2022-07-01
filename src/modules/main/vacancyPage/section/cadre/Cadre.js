import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
///

import Title from "../../../../../components/title/Title";
import VacantInfo from "../../../../../components/vacantInfo";
import Button from "../../../../../components/button";
///
export default function Cadre({ setModalActive }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [select, setSelect] = useState(null);

  const [item, setItem] = useState({
    id: uuidv4(),
    proffision: "Interyer Dizayner",
    data: "05.12.2022",
    salary: "6 000 000 - 10 000 000",
    condition: "To’liq stavka",
    time: "9:00-18:00",
    proWeckend: "6/1",
    experens: "Kamida 2 yil",

    info: [
      "Shinam ofis va raqobatli maosh",
      "Tajribali va yosh jamoa bilan ishlash imkoniyati",
      "Turli xildagi bonuslar va oromgohlar uchun chegirmalari bonuslar va chegirmalari",
    ],
  });

  let list = [
    {
      id: 1,
      type: "Dizayn xizmatlari",
      vacants: [
        {
          id: uuidv4(),
          proffision: "Interyer Dizayner",
          data: "05.12.2022",
          salary: "6 000 000 - 10 000 000",
          condition: "To’liq stavka",
          time: "9:00-18:00",
          proWeckend: "6/1",
          experens: "Kamida 2 yil",

          info: [
            "Shinam ofis va raqobatli maosh",
            "Tajribali va yosh jamoa bilan ishlash imkoniyati",
            "Turli xildagi bonuslar va oromgohlar uchun chegirmalari bonuslar va chegirmalari",
          ],
        },
        {
          id: uuidv4(),
          proffision: "Illustratsiya disayner",
          data: "05.12.2022",
          salary: "3 000 000 - 5 000 000",
          condition: "To’liq stavka",
          time: "9:00-18:00",
          proWeckend: "6/1",
          six: "Erkak",
          experens: "Kamida 2 yil",

          info: [
            "Shinam ofis va raqobatli maosh",
            "Tajribali va yosh jamoa bilan ishlash imkoniyati",
            "Turli xildagi bonuslar va oromgohlar uchun chegirmalari bonuslar va  chegirmalari",
          ],
        },
        {
          id: uuidv4(),
          proffision: "Illustratsiya disayner",
          data: "05.12.2022",
          salary: "3 000 000 - 5 000 000",
          condition: "To’liq stavka",
          time: "9:00-18:00",
          proWeckend: "6/1",
          six: "Erkak",
          experens: "Kamida 2 yil",

          info: [
            "Shinam ofis va raqobatli maosh",
            "Tajribali va yosh jamoa bilan ishlash imkoniyati",
            "Turli xildagi bonuslar va oromgohlar uchun chegirmalari bonuslar va  chegirmalari",
          ],
        },
        {
          id: uuidv4(),
          proffision: "Illustratsiya disayner",
          data: "05.12.2022",
          salary: "3 000 000 - 5 000 000",
          condition: "To’liq stavka",
          time: "9:00-18:00",
          proWeckend: "6/1",
          six: "Erkak",
          experens: "Kamida 2 yil",

          info: [
            "Shinam ofis va raqobatli maosh",
            "Tajribali va yosh jamoa bilan ishlash imkoniyati",
            "Turli xildagi bonuslar va oromgohlar uchun chegirmalari bonuslar va  chegirmalari",
          ],
        },
        {
          id: uuidv4(),
          proffision: "Illustratsiya disayner",
          data: "05.12.2022",
          salary: "3 000 000 - 5 000 000",
          condition: "To’liq stavka",
          time: "9:00-18:00",
          proWeckend: "6/1",
          six: "Erkak",
          experens: "Kamida 2 yil",

          info: [
            "Shinam ofis va raqobatli maosh",
            "Tajribali va yosh jamoa bilan ishlash imkoniyati",
            "Turli xildagi bonuslar va oromgohlar uchun chegirmalari bonuslar va  chegirmalari",
          ],
        },
      ],
    },
    {
      id: 2,
      type: "Arxitektura",
      vacants: [
        {
          id: uuidv4(),
          proffision: "Illustratsiya disayner",
          data: "05.12.2022",
          salary: "3 000 000 - 5 000 000",
          condition: "To’liq stavka",
          time: "9:00-18:00",
          proWeckend: "6/1",
          six: "Erkak",
          experens: "Kamida 2 yil",

          info: [
            "Shinam ofis va raqobatli maosh",
            "Tajribali va yosh jamoa bilan ishlash imkoniyati",
            "Turli xildagi bonuslar va oromgohlar uchun chegirmalari bonuslar va  chegirmalari",
          ],
        },
      ],
    },
    {
      id: 3,
      type: "Ekspertiza va texnik taftish xizmati",
      vacants: [],
    },
    {
      id: 4,
      type: "Toposurat va Geologiya",
      vacants: [],
    },
    {
      id: 5,
      type: "Maket yasash",
      vacants: [],
    },
  ];

  function handleCurrentCategory(index) {
    setActiveIndex(index);
  }

  function handleIndexCard(index) {
    setItem(list[activeIndex].vacants[index]);
    if (select === index) {
      return setSelect(null);
    }
    setSelect(index);
  }

  function handleComplitionForm() {
    setModalActive(true);
  }

  return (
    <StyleCadre>
      <div className="container">
        <div className="cadre">
          <Title>
            <h4 className="top__title">Sizlar uchun</h4>
            <h3 className="title">Vakansiyalar</h3>
          </Title>

          <CardreCategory>
            <div className="category__ul">
              {list.map((item, index) => {
                const { id, type, vacants } = item;
                return (
                  <div
                    className="category__li"
                    key={id}
                    onClick={() => handleCurrentCategory(index, id)}
                  >
                    <span
                      className={activeIndex === index ? "active__count" : ""}
                    >
                      {vacants.length}
                    </span>
                    <p className={activeIndex === index ? "active__text" : ""}>
                      {type}
                    </p>
                  </div>
                );
              })}
            </div>

            <div
              className="vacant__list"
              style={
                list[activeIndex].vacants.length > 0
                  ? { height: "130vh" }
                  : { height: "0" }
              }
            >
              <div className="vacant__list__item">
                {list[activeIndex].vacants.map((wrap, index) => {
                  const {
                    id,
                    proffision,
                    data,
                    salary,
                    condition,
                    time,
                    proWeckend,
                    info,
                  } = wrap;

                  return (
                    <div
                      className="info__each"
                      onClick={() => handleIndexCard(index, id)}
                      key={id}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "30px",
                      }}
                    >
                      <div className="card">
                        <div className="card__title">
                          <h3>{proffision}</h3>
                          <p>{data}</p>
                        </div>

                        <div className="card__salary">
                          <span>Maosh:</span>
                          <h3>{salary}</h3>
                        </div>

                        <div className="card__work__info">
                          <div className="position">
                            <i className="icon icon-briefcase" />
                            <p>{condition}</p>
                          </div>
                          <div className="position">
                            <i className="icon icon-time-line" />
                            <p>{time}</p>
                          </div>
                          <div className="position">
                            <i className="icon icon-briefcase" />
                            <p>{proWeckend}</p>
                          </div>
                        </div>
                        <div className="card__comment">
                          {info.map((value, index) => {
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
                      <div
                        className={
                          select === index
                            ? "vacant__hidden visibly"
                            : "vacant__hidden"
                        }
                      >
                        <VacantInfo>
                          <div className="profission">{item.proffision}</div>
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
                                    {item.proffision}
                                  </p>
                                  <p className="text__right">{item.experens}</p>
                                  <p className="text__right">{item.salary}</p>
                                  <p className="text__right">{item.time}</p>
                                </div>
                              </div>

                              <div className="information__wrap">
                                <div className="information__wrap__left">
                                  <p className="text__left">Yoshi:</p>
                                  <p className="text__left">Jinsi:</p>
                                  <p className="text__left">Ish reja:</p>
                                  <p className="text__left">Ish kuni:</p>
                                </div>
                                <div className="information__wrap__right">
                                  <p className="text__right"></p>
                                  <p className="text__right"></p>
                                  <p className="text__right"></p>
                                  <p className="text__right"></p>
                                </div>
                              </div>
                            </div>

                            <div className="responsibilities">
                              <h2>Tafsilot va majburiyatlar:</h2>
                              <p>
                                Turli xildagi bonuslar va oromgohlar uchun
                                chegirmalari bonuslar va oromgohlar xildagi
                                bonuslar va oromgohlar uchun chegirmalari
                                bonuslar va oromgohlar uchun chegirmalariuchun
                                chegirmalari uchun chegirmalari bonuslar va
                                oromgohlar xildagi bonuslar va oromgohlar uchun
                                chegirmalari bonuslar va oromgohlar uchun
                                chegirmalariuchun chegirmalari
                              </p>
                            </div>

                            <div className="offer">
                              <h2>Biz taklif qilamiz:</h2>
                              <p>
                                Turli xildagi bonuslar va oromgohlar uchun
                                chegirmalari bonuslar va oromgohlar xildagi
                                bonuslar va oromgohlar uchun chegirmalari
                                bonuslar va oromgohlar uchun chegirmalariuchun
                                chegirmalari uchun chegirmalari bonuslar va
                                oromgohlar xilda bonuslar va oromgohlar uchun
                                chegirmalari bonuslar va oromgohlar
                              </p>
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

              {list[activeIndex].vacants.length > 0 ? (
                <VacantInfo desktop>
                  <div className="profission">{item.proffision}</div>
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
                          <p className="text__right">{item.proffision}</p>
                          <p className="text__right">{item.experens}</p>
                          <p className="text__right">{item.salary}</p>
                          <p className="text__right">{item.time}</p>
                        </div>
                      </div>

                      <div className="information__wrap">
                        <div className="information__wrap__left">
                          <p className="text__left">Yoshi:</p>
                          <p className="text__left">Jinsi:</p>
                          <p className="text__left">Ish reja:</p>
                          <p className="text__left">Ish kuni:</p>
                        </div>
                        <div className="information__wrap__right">
                          <p className="text__right"></p>
                          <p className="text__right"></p>
                          <p className="text__right"></p>
                          <p className="text__right"></p>
                        </div>
                      </div>
                    </div>

                    <div className="responsibilities">
                      <h2>Tafsilot va majburiyatlar:</h2>
                      <p>
                        Turli xildagi bonuslar va oromgohlar uchun chegirmalari
                        bonuslar va oromgohlar xildagi bonuslar va oromgohlar
                        uchun chegirmalari bonuslar va oromgohlar uchun
                        chegirmalariuchun chegirmalari uchun chegirmalari
                        bonuslar va oromgohlar xildagi bonuslar va oromgohlar
                        uchun chegirmalari bonuslar va oromgohlar uchun
                        chegirmalariuchun chegirmalari
                      </p>
                    </div>

                    <div className="offer">
                      <h2>Biz taklif qilamiz:</h2>
                      <p>
                        Turli xildagi bonuslar va oromgohlar uchun chegirmalari
                        bonuslar va oromgohlar xildagi bonuslar va oromgohlar
                        uchun chegirmalari bonuslar va oromgohlar uchun
                        chegirmalariuchun chegirmalari uchun chegirmalari
                        bonuslar va oromgohlar xilda bonuslar va oromgohlar
                        uchun chegirmalari bonuslar va oromgohlar
                      </p>
                    </div>

                    <Button onClick={handleComplitionForm}>
                      Ariza qoldirish
                    </Button>
                  </div>
                </VacantInfo>
              ) : (
                ""
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
