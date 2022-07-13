import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import RootContext from "../../../../../context/Context";

//
import Button from "../../../../../components/button";
import Title from "../../../../../components/title";
import { useContext } from "react";
//Arrow Customs
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClick}
    >
      <i
        className="icon icon-top-right icon-sm"
        style={{ transform: "rotate(45deg)" }}
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClick}
    >
      <i
        className="icon icon-top-right icon-sm"
        style={{ transform: "rotate(225deg)" }}
      />
    </div>
  );
}
export default function VacancySection({ firstVacantArray }) {
  const { t } = useTranslation();
  const { curLangId } = useContext(RootContext);
  const navigate = useNavigate();
  const setting = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: firstVacantArray?.vacancies?.length < 3 ? 1 : 3,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          autoplay: true,
          autoplaySpeed: 3000,
          cssEase: "linear",
        },
      },

      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  function toVacancyPage(url, vacancy_id, serves_id) {
    navigate(url, {
      state: {
        vacancy_id,
        serves_id,
      },
    });
  }

  if (!firstVacantArray) return null;

  return (
    <StyleVacancy>
      <div className="container">
        <Title>
          <div className="top__title">{t("title_top")}</div>
          <div className="title">{t("vacanse_txt")}</div>
          <div className="info">{t("text_bottom_partner")}</div>
        </Title>

        <Slider {...setting}>
          {firstVacantArray.vacancies.length > 0
            ? firstVacantArray?.vacancies?.map((item, index) => {
                // console.log(item);
                return (
                  <div
                    key={item.vacancies_id}
                    className="card"
                    onClick={() =>
                      toVacancyPage(
                        "/vacansy",
                        item.vacancies_id,
                        item.service_id
                      )
                    }
                  >
                    <h2 className="specialist">
                      {curLangId === 0
                        ? item.vacancies_title_uz
                        : item.vacancies_title_ru}
                    </h2>
                    <div className="salary"></div>
                    <div className="demand">{t("requirements")}:</div>
                    <div className="year row">
                      <div className="size_left">{t("text_experience")}:</div>
                      <div className="size__right">
                        {item.vacancies_experience}
                      </div>
                    </div>
                    <div className="six row">
                      <div className="size_left">{t("text_salary")}:</div>
                      <div className="size__right">{item.vacancies_salary}</div>
                    </div>
                    <div className="experience row">
                      <div className="size_left">{t("text_work_time")}:</div>
                      <div className="size__right">
                        {item.vacancies_working_time}
                      </div>
                    </div>
                    <div className="position row">
                      <div className="size_left">{t("text_work_day")}:</div>
                      <div className="size__right">
                        {item.vacancies_work_schedule}
                      </div>
                    </div>
                    <div className="view row">
                      <p>{t("all_vacancy_txt")}</p>
                      <i className="icon icon-top-right icon-very-sm " />
                    </div>
                  </div>
                );
              })
            : ""}
        </Slider>
        <div className="all__view" onClick={() => toVacancyPage("/vacansy")}>
          <Button bglight>
            <p>{t("all_vacancy_txt")}</p>
            <i className="icon icon-top-right icon-very-sm  " />
          </Button>
        </div>
      </div>
    </StyleVacancy>
  );
}
const StyleVacancy = styled.div`
  background-color: var(--color-bg);
  padding: 107px 0;

  .all__view {
    display: flex;
    justify-content: flex-end;
    margin: 40px 5px 0 0;
  }
  .slick-slider {
    position: relative;
    margin-top: 60px;
    display: flex;
    .card {
      position: relative;
      width: 97% !important;
      transform: translateX(5px);
      padding: 27px 0 36px 57px;
      background: var(--light);
      box-shadow: 0px 2px 3px rgba(62, 62, 62, 0.15);
      border-radius: 2px 0px 0px 2px;
      cursor: pointer;
      &::before {
        content: "";
        position: absolute;
        width: 12px;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 9999;
        background-color: var(--light-orang);
      }
      .specialist {
        font-size: 25px;
        font-weight: 600;
        line-height: 35px;
        letter-spacing: 0em;
        margin-bottom: 15px;
      }
      .salary {
        font-size: 18px;
        font-weight: 600;
        line-height: 25px;
        letter-spacing: 0em;
        margin-bottom: 25px;
      }
      .row {
        display: flex;
        align-items: center;
        gap: 13.5px;
        margin-top: 15px;
        .size__right {
          font-size: 16px;
          font-weight: 600;
          line-height: 22px;
          letter-spacing: 0em;
        }
        .size_left {
          font-size: 16px;
          font-weight: 600;
          line-height: 22px;
          letter-spacing: 0em;
          opacity: 0.5;
        }
      }
      .view {
        color: var(--orange);
        font-size: 18px;
        font-weight: 600;
        line-height: 25px;
        letter-spacing: 0em;
        margin-top: 25px;
        i {
          background-color: var(--orange);
          transform: rotate(45deg);
          transition: 0.5s;
        }
        &:hover {
          i {
            transform: rotate(-10deg);
          }
        }
      }
    }

    .slick-arrow {
      width: 50px;
      height: 50px;
      position: absolute;
      top: -83px;
      right: 0;
      left: auto;
      border-radius: 50%;
      border: 1px solid var(--dark);
      transition: 0.2s;
      &::before {
        display: none !important;
      }
      &:hover {
        border: 1px solid silver;
        i {
          background-color: var(--color-navbar);
        }
      }
    }
    .slick-prev {
      margin-right: 67px;
    }
  }

  @media (max-width: 1024px) {
    padding: 120px 0;
  }
  @media (max-width: 600px) {
    padding: 60px 0;
    .all__view {
      margin: 70px 5px 0 0;
    }
    .slick-slider {
      .slick-arrow {
        display: none !important;
      }
      .slick-dots {
        bottom: -50px;
      }
    }
  }
`;
