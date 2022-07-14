import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
///
import SliderItem from "../../../../../components/slider/SliderItem";
import Img1 from "../../../../../assets/image/showcase.png";
import Img2 from "../../../../../assets/image/showcase4.png";
import Img3 from "../../../../../assets/image/showcase5.png";
import Button from "../../../../../components/button";
import ShowcaseTitle from "../../../../../components/showcaseTitle";
import { useState } from "react";

/////
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
      <i className="icon icon-arrow-right icon-sm" />
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
      <i className="icon icon-arrow-right icon-sm" />
    </div>
  );
}

////

export default function Showcase({ setModal }) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [state, setState] = useState({
    slideIndex: 3,
    updateCount: 1,
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    touchMove: false,
    afterChange: () =>
      setState((state) =>
        state.updateCount === 3
          ? { updateCount: (state.updateCount = 1) }
          : { updateCount: state.updateCount + 1 }
      ),
    // beforeChange: (current, next) => this.setState({ slideIndex: next }),
  };

  function openModal() {
    setModal(true);
  }

  function toAboutPage(url) {
    navigate(url);
  }
  return (
    <StyleShowcase>
      <div className="showcase__slider">
        <div className="bg__lenta">
          <div className="bg__lenta__count">
            <div className="current__count">0{state.updateCount}</div>
            <div className="line">|</div>
            <div className="count__lenght">03</div>
          </div>
        </div>

        <SliderItem {...settings}>
          <div className="card">
            <img className="showcase__img" src={Img1} alt="img" />
          </div>
          <div className="card">
            <img className="showcase__img" src={Img2} alt="img" />
          </div>
          <div className="card">
            <img className="showcase__img" src={Img3} alt="img" />
          </div>
        </SliderItem>
      </div>
      <TextStyle>
        <div className="showcase__text">
          <div className="showcase__text__left">
            <ShowcaseTitle>
              <h4>{t("showcase__title")}</h4>
              <div className="purposi">{t("showcase__subtitle")}</div>
              <p className="comment">{t("showcase__description")}</p>
            </ShowcaseTitle>

            <div className="showcase__btns">
              <Button onClick={openModal}>{t("leave_an_app_btn")}</Button>
              <Button outline onClick={() => toAboutPage("about")}>
                <p>{t("our_project_btn")}</p>
                <i className="icon icon-top-right icon-very-sm" />
              </Button>
            </div>
          </div>

          <div className="showcase__text__right">
            <i className="icon icon-facebook color__icon" />
            <i className="icon icon-telegram  color__icon" />
            <i className="icon icon-twitter  color__icon" />
          </div>
        </div>
      </TextStyle>
    </StyleShowcase>
  );
}

const StyleShowcase = styled.div`
  .showcase__slider {
    position: relative;
    .bg__lenta {
      position: absolute;
      bottom: 5px;
      right: 0;
      z-index: 99;
      background: rgba(21, 21, 21, 0.8);
      padding: 36px 296px 36px 100px;
      &__count {
        display: flex;
        align-items: center;
        font-size: 20px;
        font-weight: 600;
        line-height: 27px;
        letter-spacing: 0em;
        margin-right: 80px;
        .current__count {
          color: var(--light);
        }
        .line {
          margin: 0 17px;
          color: var(--light);
          opacity: 0.4;
        }

        .count__lenght {
          color: var(--light);
          opacity: 0.4;
        }
      }
    }
    .slick-slider {
      .card {
        .showcase__img {
          width: 100%;
          object-fit: cover;
        }
      }

      .slick-arrow {
        position: absolute;
        width: 50px;
        height: 50px;
        left: auto;
        right: 140px;
        z-index: 111111;
        bottom: 5px;
        top: auto;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 38px;
        transition: 0.23 linear;
        z-index: 99;
        i {
          background-color: var(--light);
          opacity: 0.4;
        }
        &::before {
          display: none !important;
        }
        &:hover {
          border: 1px solid var(--light);
          i {
            background-color: var(--light);
            opacity: 1;
          }
        }
      }
      .slick-prev {
        bottom: 30px;
        margin-right: 67px;
        transform: rotate(180deg);
      }
    }

    .slick-dots {
      width: 100px !important;
      height: 40px !important;
      top: 345px;
      left: 2px;
      z-index: 9;
      transform: rotate(90deg);
      .slick-active button:before {
        color: rgba(255, 255, 255, 0.5);
      }
    }
  }
  @media (max-width: 1200px) {
    .showcase__slider {
      .slick-slider {
        .slick-arrow {
          right: 15px;
        }
      }
      .slick-dots {
        left: -30px;
        top: 50%;
      }
    }
  }

  @media (max-width: 1024px) {
    .showcase__slider {
      .bg__lenta {
        padding: 50px 200px 50px 100px;
      }
      .slick-slider {
        .slick-slide {
          .card {
            .showcase__img {
              min-height: 939px;
            }
          }
        }
        .slick-arrow {
          bottom: 20px !important;
        }
        .slick-prev {
          bottom: 44px !important;
        }
      }
      .slick-dots {
        top: 430px;
      }
    }
  }
  @media (max-width: 768px) {
    .showcase__slider {
      .slick-slider {
        .slick-slide {
          .card {
            .showcase__img {
              min-height: 939px;
            }
          }
        }
        .slick-dots {
          display: none !important;
        }
      }
    }
  }
  @media (max-width: 600px) {
    .showcase__slider {
      .bg__lenta {
        padding-left: 15px;
        width: 100%;
        left: 0;
      }

      .slick-slider {
        .slick-slide {
          .card {
            .showcase__img {
              min-height: 750px;
            }
          }
        }
        .slick-arrow {
          right: 15px;
        }
      }
    }
  }

  @media (max-width: 500px) {
    .showcase__slider {
      .bg__lenta {
        width: 100%;
        left: 0;
        padding: 36px 15px 36px 15px;
      }
      .slick-slider {
        .slick-arrow {
          bottom: 5px !important;
        }
        .slick-prev {
          bottom: 30px !important;
        }
      }
    }
  }
`;

const TextStyle = styled.div`
  position: absolute;
  top: 185px;
  width: calc(100% - 30px);
  max-width: 1200px;
  left: 50%;
  transform: translateX(-50%);

  .showcase__text {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    &__left {
      color: var(--light);

      .showcase__btns {
        display: flex;
        align-items: center;
        gap: 51px;
      }
    }

    &__right {
      display: flex;
      flex-direction: column;
      gap: 26px;
      .color__icon {
        transition: 0.1s linear;
        background-color: var(--light);
        &:hover {
          transform: scale(1.2);
        }
      }
    }
  }

  @media (max-width: 1300px) {
    width: calc(100%-100px);
    max-width: 1100px;
  }
  @media (max-width: 1024px) {
    top: 282px;
    max-width: 900px;
    .showcase__text {
      display: grid;
      grid-template-columns: 1fr;

      &__right {
        display: none;
      }
    }
  }
  @media (max-width: 768px) {
    max-width: 668px;
  }
  @media (max-width: 700px) {
    max-width: 600px;
  }
  @media (max-width: 600px) {
    top: 120px;
    max-width: 550px;
    .showcase__text {
      &__left {
        .showcase__btns {
          gap: 15px;
        }
      }
    }
  }
`;
