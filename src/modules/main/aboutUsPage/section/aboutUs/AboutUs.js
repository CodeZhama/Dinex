import React from "react";
import styled from "styled-components";

///

import Title from "../../../../../components/title/Title";
import Logo from "../../../../../assets/image/Logo.png";
import Img1 from "../../../../../assets/image/aboutimg.png";
import Img2 from "../../../../../assets/image/aboutImg2.png";

//
export default function AboutUs() {
  return (
    <StyleAboutUs>
      <div className="container">
        <div className="about__section">
          <Title>
            <h3 className="top__title">2016 yildan beri siz bilan</h3>
            <h2 className="title">Biz haqimizda batafsil</h2>
            <p className="info">
              Bizlar siz uchun eng zamonaviy xizmatlarni taklif qilamiz
            </p>
          </Title>

          <div className="about__section__item">
            <div className="about__section__item__left">
              <img className="logo__check" src={Logo} alt="logo" />
              <img className="section__img" src={Img1} alt="img" />
            </div>

            <div className="about__section__item__right">
              <img className="logo__check" src={Logo} alt="logo" />
              <div>
                <img className="section__img" src={Img2} alt="img" />
              </div>
              <h2 className="section__text">Bizning kompaniya</h2>
              <p>
                Interer dizayner kabi kasblar zamonaviy dunyodagi eng nufuzli
                kasblardan biridir va bu kasb faqat ijodkorlarning tanlovi degan
                tushuncha mutlaqo noto'g'ri. Malakali dizaynerlar sizning
                mushkulingizga bir zumda sifatli va zamonaviy yechim topa oladi
                va uni hal qiladi.
                <br />
                Agar siz uyingiz uchun betakror dizayn qilishga qaror qilgan
                bo’lsangiz, albatta mutahassisga murojatqilishingiz lozim.
                <br />
                Arxitektura nazariyasi, qurilish ishlari uchun standartlar,
                yoritish va fitodizayn, shaharsozlik asoslari kabi bir nechta
                tegishli fanlarni o'zlashtirish kerak.
                <br />
                Shu sababli biz sizlar uchun eng zamonaviy hamda sifatli
                hizmatlarni taklif qilamiz, hamda sizlarni biz bilan hamkorlikka
                chorlaymiz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </StyleAboutUs>
  );
}

const StyleAboutUs = styled.div`
  padding: 182px 0 113px 0;

  .about__section {
    &__item {
      display: flex;
      gap: 76px;
      margin-top: 113px;

      &__left {
        position: relative;
        margin-left: -4px;

        .section__img {
          width: 100%;
          object-fit: cover;
        }
        .logo__check {
          position: absolute;
          left: 23px;
          top: 31px;
        }
      }

      &__right {
        position: relative;

        .logo__check {
          position: absolute;
          left: 23px;
          top: -525px;
          z-index: 1;
        }
        .section__img {
          width: 660px;
          position: absolute;
          top: -558px;
        }
        .section__text {
          margin: 230px 0 20px 0;
          font-size: 38px;
          font-weight: 600;
          line-height: 52px;
        }

        p {
          max-width: 680px;
          font-size: 22px;
          font-weight: 600;
          line-height: 36px;
        }
      }
    }
  }
  @media (max-width: 1300px) {
    .about__section {
      &__item {
        &__right {
          .section__img {
            width: 600px;
          }
          .section__text {
            margin: 150px 0 20px 0;
          }
        }
      }
    }
  }
  @media (max-width: 1024px) {
    padding: 60px 0;
    .about__section {
      &__item {
        gap: 20px;
        margin-top: 65px;

        &__right {
          .logo__check {
            top: -330px;
          }
          .section__img {
            top: -360px;
            width: 480px;
            min-height: 313px;
          }
          .section__text {
            font-size: 28px;
            font-weight: 600;
            line-height: 38px;
            letter-spacing: 0em;
          }
        }
        p {
          font-size: 18px;
          font-weight: 600;
          line-height: 26px;
          letter-spacing: 0em;
        }
      }
    }
  }

  @media (max-width: 1000px) {
    .about__section {
      &__item {
        &__right {
          .section__img {
            width: 420px;
          }
        }
      }
    }
  }
  @media (max-width: 953px) {
    .about__section {
      &__item {
        &__right {
          .section__img {
            width: 380px;
          }
        }
      }
    }
  }
  @media (max-width: 920px) {
    .about__section {
      &__item {
        &__right {
          .section__img {
            width: 360px;
          }
          .section__text {
            margin: 70px 0 20px 0;
          }
        }
      }
    }
  }
  @media (max-width: 850px) {
    .about__section {
      &__item {
        &__right {
          .section__img {
            width: 340px;
          }
          .section__text {
            margin: 60px 0 20px 0;
          }
        }
      }
    }
  }
  @media (max-width: 768px) {
    .about__section {
      &__item {
        &__right {
          .logo__check {
            top: -270px;
          }
          .section__img {
            top: -289px;
            width: 290px;
            min-height: 280px;
          }
          .section__text {
            margin: 49px 0 20px 0;
          }
        }
      }
    }
  }
  @media (max-width: 600px) {
    .about__section {
      &__item {
        flex-direction: column-reverse;
        margin: 15px 0 0 0;
        &__right {
          .logo__check {
            top: 31px;
          }w
          .section__img {
            width: 100%;
            position: initial;
          }
          .section__text {
            margin: 60px 0 19px;
          }
          p {
            max-width: initial;
            font-size: 18px;
            font-weight: 600;
            line-height: 28px;
            letter-spacing: -0.01em;
          }
        }
      }
    }
  }
`;
