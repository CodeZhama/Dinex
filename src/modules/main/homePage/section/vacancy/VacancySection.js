import React from "react";
import styled from "styled-components";
//
import SliderItem from "../../../../../components/slider/SliderItem";
import Button from "../../../../../components/button";
import list from "./static";
import Title from "../../../../../components/title";
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
export default function VacancySection() {
  const setting = {
    dots: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,

          autoplaySpeed: 3000,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true,
        },
      },
      {
        breakpoint: 550,
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

  return (
    <StyleVacancy>
      <div className="container">
        <Title>
          <div className="top__title">Sizlar uchun! </div>
          <div className="title">Vakansiyalar</div>
          <div className="info">
            Biz uchun o’z ishini sevadigan, qadryatlarga ega halol hodimlar
            kerak
          </div>
        </Title>

        <SliderItem {...setting}>
          {list.map((item) => (
            <div key={item.id} className="card">
              <h2 className="specialist">{item.specialist}</h2>
              <div className="salary">{item.salary}</div>
              <div className="demand">Talablar:{item.demand}</div>
              <div className="year row">
                <h6>Yoshi:</h6>
                <p>{item.year}</p>
              </div>
              <div className="six row">
                <h6>Jinsi:</h6>
                <p>{item.six}</p>
              </div>
              <div className="experience row">
                <h6>Tajribasi:</h6>
                <p>{item.experience}</p>
              </div>
              <div className="position row">
                <h6>Lavozimi:</h6>
                <p>{item.position}</p>
              </div>
              <div className="view row row">
                <p>{item.view}</p>
                <i className="icon icon-top-right icon-very-sm " />
              </div>
            </div>
          ))}
        </SliderItem>
        <div className="all__view">
          <Button bglight>
            <p>Barcha ish o’rinlari</p>
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
        font-size: 26px;
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
        margin-top: 9px;
        p {
          font-size: 16px;
          font-weight: 600;
          line-height: 22px;
          letter-spacing: 0em;
        }
      }
      .view {
        color: var(--orange);
        font-size: 18px;
        font-weight: 600;
        line-height: 25px;
        letter-spacing: 0em;
        margin-top: 11.5px;
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
