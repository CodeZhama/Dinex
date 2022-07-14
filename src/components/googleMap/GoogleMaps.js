import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
//

export default function GoogleMaps() {
  const { t } = useTranslation();
  return (
    <MapLocationStle>
      <div className="location">
        <div className="location__left">
          <div className="title">
            <p>{t("connect_us")}</p>
            <i className="icon icon-down" />
          </div>

          <div className="content">
            <h4 className="info__text">{t("email")}</h4>

            <div className="massage__phone">
              <i className="icon icon-message" />
              <p>dinex@gmail.com</p>
            </div>

            <h4 className="info__text">{t("phone_number")}</h4>
            <div className="massage__phone">
              <i className="icon icon-phone" />
              <p>+998 55 500 55 25</p>
            </div>

            <h3 className="info__text">{t("social_txt")}:</h3>
            <div className="socials">
              <div className="socials__link">
                <i className="icon icon-instagram" />
                <i className="icon icon-telegram" />
                <i className="icon icon-facebook" />
                <i className="icon icon-twitter" />
              </div>
            </div>

            <h4 className="info__text">{t("location_title")}</h4>
            <div className="massage__phone">
              <i className="icon icon-location" />
              <p className="address">{t("navbar_location")}</p>
            </div>
          </div>
        </div>
      </div>
      <iframe
        width="100%"
        height="590"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=Abdulla%20qodiriy%20ko%E2%80%99chasi,%201A,%E2%80%A8Mo%E2%80%99ljal:%20Oliy%20sud&t=&z=17&ie=UTF8&iwloc=&output=embed"
        frameborder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
      ></iframe>
    </MapLocationStle>
  );
}

const MapLocationStle = styled.div`
  position: relative;
  width: 100%;
  min-height: 100%;
  margin-top: 32px;
  .location {
    position: absolute;
    bottom: 4%;
    left: 1%;
    z-index: 99;
    &__left {
      padding: 28px 103px 44px 31px;
      background: var(--light);
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
      .title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 38px;
        p {
          font-size: 26px;
          font-weight: 600;
          line-height: 35px;
        }
        .icon-down {
          width: 20px;
          height: 20px;
          display: none;
        }
      }

      .content {
        .info__text {
          margin-bottom: 12px;
          font-size: 14px;
          font-weight: 400;
          line-height: 19px;
        }

        .massage__phone {
          display: flex;
          align-items: center;
          gap: 11px;
          font-size: 16px;
          font-weight: 600;
          line-height: 22px;
          margin-bottom: 37px;
          cursor: pointer;
          .icon-location {
            width: 20px;
            height: 20px;
          }
          .address {
            max-width: 216px;
          }
        }

        .socials {
          margin-bottom: 60px;
          &__link {
            display: flex;
            align-items: center;
            gap: 39px;
            margin-top: 22px;
            .icon-instagram {
              background-color: #ff4f4f;
            }
            .icon-telegram {
              background-color: #00beca;
            }
            .icon-facebook {
              background-color: #1a54e8;
            }
            .icon-twitter {
              background-color: #0f9aff;
            }
          }
        }
      }
    }

    /* &__right {
      display: flex;
      align-items: center;
      border: 1px solid red;
      gap: 10px;
      padding: 18px 31px 19px 28px;
      background: var(--light);
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
      p {
        font-size: 16px;
        font-weight: 600;
        line-height: 22px;
      }
      .icon-location {
        width: 20px;
        height: 20px;
      }
    } */
  }
  @media (max-width: 768px) {
    .location {
      position: initial;
      margin-bottom: 10px;
    }
  }
`;
