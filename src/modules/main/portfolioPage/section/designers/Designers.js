import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import RootContext from "../../../../../context/Context";
//
import Title from "../../../../../components/title/Title";
import Button from "../../../../../components/button";
// import Modal from "../../../../../components/modal/Modal";

//
export default function Designers({
  setModal,
  loading,
  curPortfoliSilder,
  activeIndex,
  currentSer,
  services,
  setActiveIndex,
  setCurSer,
  setCurPortfolioSlider,
}) {
  const { t } = useTranslation();
  const { curtLangId } = useContext(RootContext);

  function changeCurSer(service, idx) {
    setCurSer(service);
    setActiveIndex(idx);
  }

  function handleSliderArray(array) {
    setCurPortfolioSlider(array);
    setModal(true);
  }
  useEffect(() => {
    console.log(curPortfoliSilder);
  }, [curPortfoliSilder]);

  return (
    <StyleDesigner>
      <div className="container">
        <Title>
          <h4 className="top__title">{t("title_top")}</h4>
          <h1 className="title">{t("navbar_portfolio")}</h1>
        </Title>
        {loading ? (
          <h1>Loading....</h1>
        ) : (
          <StyleDesignList>
            <div className="type__div">
              {[...services].map((item, index) => {
                const { service_name_uz, service_id, service_name_ru } = item;
                return (
                  <div
                    key={service_id}
                    className="type__item"
                    onClick={() => changeCurSer(item, index)}
                  >
                    <span
                      className={
                        index === activeIndex
                          ? "type__span active__span"
                          : "type__span"
                      }
                    >
                      {}
                    </span>
                    <h5 className={activeIndex === index ? "active__h5" : ""}>
                      {curtLangId === 1 ? service_name_ru : service_name_uz}
                    </h5>
                  </div>
                );
              })}
            </div>
            {loading ? (
              <h1>Loading.....</h1>
            ) : (
              <div className="gallery">
                {currentSer?.portfolios.map((i) => (
                  <div
                    className="picture"
                    key={i.portfolio_id}
                    onClick={() => handleSliderArray(i.portfolio_images)}
                  >
                    <img
                      src={
                        "http://admin.dinex.uz/files/" + i.portfolio_images[0]
                      }
                      alt="img"
                    />
                  </div>
                ))}
              </div>
            )}

            <div className="more__btn">
              <Button seemore>{t("more_bnt_txt")}</Button>
            </div>
          </StyleDesignList>
        )}
      </div>
    </StyleDesigner>
  );
}

const StyleDesigner = styled.div`
  padding: 160px 0 120px 0;
  @media (max-width: 1024px) {
    padding: 120px 0;
  }
  @media (max-width: 600px) {
    padding: 60px 0;
  }
`;

const StyleDesignList = styled.div`
  .type__div {
    display: flex;
    align-items: center;
    gap: 120px;

    overflow: auto;
    &::-webkit-scrollbar {
      width: 0;
    }
    .type__item {
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;

      .type__span {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 10px;
        font-weight: 600;
        line-height: 14px;
        letter-spacing: 0em;
        padding: 4px 5px;
        background: rgba(0, 33, 118, 0.1);
        border-radius: 5px;
        transition: 0.3s ease-in-out;
        &.active__span {
          background-color: var(--orange);
          color: var(--light);
        }
      }
      h5 {
        font-size: 18px;
        font-weight: 600;
        line-height: 25px;
        opacity: 0.4;
        transition: 0.3s ease-in-out;
        white-space: nowrap;
        &.active__h5 {
          line-height: 25px;
          opacity: 1;
        }
      }
    }
  }

  .gallery {
    -webkit-column-count: 3;
    -moz-column-count: 3;
    column-count: 3;
    -webkit-column-width: 33%;
    -moz-column-width: 33%;
    column-width: 33%;
    margin-top: 42px;

    .picture {
      margin-bottom: 20px;
      display: inline-block;
      img {
        width: 100%;
        object-fit: cover;
      }
    }
  }

  .more__btn {
    margin-top: 40px;
  }

  @media (max-width: 1024px) {
    margin-top: 40px;
    .type__div {
      gap: 10px;
      overflow: auto;
      .type__item {
        margin-right: 60px;
        h5 {
          white-space: nowrap;
        }
      }
      &::-webkit-scrollbar {
        width: 0;
      }
    }

    .gallery {
      -webkit-column-count: 2;
      -moz-column-count: 2;
      column-count: 2;
      -webkit-column-width: 50%;
      -moz-column-width: 50%;
      column-width: 50%;
    }
  }
`;
