import React from "react";
import styled from "styled-components";
// import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
///
import list from "./static";
import Title from "../title/Title";
import SliderItem from "../slider/SliderItem";
///Slider Customs///
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
        className="icon icon-top-right icon-middle"
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
        className="icon icon-top-right icon-middle"
        style={{ transform: "rotate(225deg)" }}
      />
    </div>
  );
}

////
const PartnerComponent = () => {
  const { t } = useTranslation();
  // const navigate = useNavigate();
  var setting = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 2,
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
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <StylePartner>
      <div className="container">
        <Title>
          <div className="top__title">{t("text_top_partner")}</div>
          <div className="title">{t("text_center_partner")}</div>
          <div className="info">{t("text_bottom_partner")}</div>
        </Title>
        <div className="partner__slider">
          <SliderItem {...setting}>
            {list.map((item) => (
              <div className="card" key={item.id}>
                <img className="card__img" src={item.img} alt={item.company} />
                <h6 className="card__company__name">{item.company}</h6>
              </div>
            ))}
          </SliderItem>
        </div>
      </div>
    </StylePartner>
  );
};

export default PartnerComponent;

const StylePartner = styled.div`
  padding: 140px 0 195px 0;
  .partner__slider {
    width: 85%;
    margin: 0 auto;
    margin-top: 81px;
    .slick-slider {
      position: relative;
      .slick-slide {
        .card {
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          justify-content: center !important;
          img {
            width: 140px;
            height: 148px;
            object-fit: cover;
          }
          h6 {
            font-size: 15px;
            font-weight: 700;
            line-height: 20px;
            letter-spacing: 0em;
            margin-top: 22px;
          }
        }
      }

      .slick-arrow {
        position: absolute;
        width: 60px;
        height: 60px;
        border: 0.7px solid #e4e4e4;
        border-radius: 50%;
        cursor: pointer;
        &::before {
          display: none !important;
        }
      }
      .slick-prev {
        left: -89px;
      }
      .slick-next {
        right: -89px;
      }
    }
  }

  @media (max-width: 1024px) {
    padding: 120px 0 120px 0;
    .partner__slider {
      .slick-slider {
        .slick-arrow {
          display: none !important;
        }
      }
      .slick-dots {
        bottom: -60px;
      }
    }
  }
  @media (max-width: 600px) {
    padding: 60px 0 90px 0;
    .partner__slider {
      .slick-arrow {
        display: none !important;
      }
    }
  }
`;
