import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
//
import RootContext from "../../../../../context/Context";
import bg from "../../../../../assets/image/servesbg.png";
import Button from "../../../../../components/button/Button";
import Title from "../../../../../components/title/Title";
import Api from "../../../../../services/api";
import Modal from "../../../../../components/modal";
import Application from "../../../../../components/application";
///
export default function TypeServes() {
  const { state } = useLocation();
  console.log(state);
  const { t } = useTranslation();
  const { curtLangId } = useContext(RootContext);
  const [activeIndex, setActiveIndex] = useState(state || 0);
  const [loading, setLoading] = useState(true);
  const [typeServec, setTypeServec] = useState([]);
  const [curSerItem, setCurSerItem] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    getDataServece();
  }, []);

  async function getDataServece() {
    try {
      const { data } = await Api.get("service");
      if (data) {
        setTypeServec(data.data.services);
        setCurSerItem(data.data.services[state || 0]);
        // console.log(data.data.services);
        setLoading(true);
      } else {
        console.log("Malumot topilmadi");
      }
    } catch (error) {
      setLoading(true);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  function handleActiveId(id, item) {
    setActiveIndex(id);
    setCurSerItem(item);
  }

  function openModalFunc() {
    setOpenModal(true);
  }

  return (
    <StyleTypeServes>
      <div className="container">
        <div className="type__servece">
          <Title servecePage>
            <h3 className="top__title">{t("title_top")}</h3>
            <h1 className="title">{t("title_center")}</h1>
          </Title>
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            <div className="type">
              {typeServec.map((item, index) => {
                const { service_id, service_name_uz, service_name_ru } = item;
                return (
                  <div
                    key={service_id}
                    onClick={() => handleActiveId(index, item)}
                    className={
                      activeIndex === index ? "type__item active" : "type__item"
                    }
                  >
                    {curtLangId === 1 ? service_name_ru : service_name_uz}
                  </div>
                );
              })}
            </div>
          )}
          <div className="type__more">
            <h1>
              {curtLangId === 1
                ? curSerItem?.service_name_ru
                : curSerItem?.service_name_uz}
            </h1>
            <p>
              {curtLangId === 1
                ? curSerItem?.service_description_ru
                : curSerItem?.service_description_uz}
            </p>
          </div>
          <div className="submit__btn" onClick={openModalFunc}>
            <Button>{t("leave_an_app_btn")}</Button>
          </div>
        </div>
      </div>
      {openModal ? (
        <Modal typeServesModal={() => setOpenModal(false)}>
          <Application />
        </Modal>
      ) : (
        ""
      )}
    </StyleTypeServes>
  );
}

const StyleTypeServes = styled.div`
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 87px 0;
  .type__servece {
    color: var(--light);
    .type {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
      text-align: center;
      margin-top: 50px;
      overflow-x: auto;
      overflow-y: hidden;
      &.type::-webkit-scrollbar {
        width: 0;
      }
      &__item {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 55px 15px;
        transition: 300ms ease-in;
        color: var(--light);
        font-size: 17px;
        font-weight: 600;
        line-height: 23px;
        border-right: 1px solid var(--light);
        cursor: pointer;
        white-space: nowrap;

        &:last-child {
          border: none;
        }
        &.active {
          transform: scaleY(1.03);
          background: rgba(0, 0, 0, 0.7);
        }
      }
    }

    .type__more {
      padding: 50px 0 30px 0;
      border-bottom: 1px solid var(--light);

      & > h1 {
        font-size: 38px;
        font-weight: 600;
        line-height: 52px;
      }
      & > p {
        min-height: 180px;
        margin-top: 20px;
        font-size: 22px;
        font-weight: 600;
        line-height: 36px;
      }
    }

    .submit__btn {
      margin-top: 57px;
    }
  }

  @media (max-width: 1024px) {
    padding: 60px 0;
  }
  @media (max-width: 1024px) {
    .type__servece {
      .type {
        &__item {
          min-width: 220px;
          padding: 38px 15px;
          font-size: 17px;
          font-weight: 600;
          line-height: 23px;
        }
      }

      .type__more {
        padding: 87px 0 25px 0;
        & > p {
          font-size: 16px;
          line-height: 26px;
          max-width: 668px;
        }
      }
      .submit__btn {
        margin-top: 63px;
      }
    }
  }
  @media (max-width: 376px) {
    .type__servece {
      .type {
        &__item {
          padding: 14px 0;
          font-size: 16px;
          line-height: 22px;
          letter-spacing: 0em;
          border: none !important;
        }
      }
      .type__more {
        padding: 33px 0 25px 0;
      }
    }
  }
`;
