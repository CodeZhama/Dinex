import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
//
import quadrat from "../../../src/assets/image/quadrat.png";
import Button from "../../components/button";
import Api from "../../services/api";
//
export default function Application() {
  const { t } = useTranslation();
  const [fullName, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");

  async function PostApplication() {
    try {
      const res = await Api.post("application", {
        application_fullname: fullName,
        application_phone: phone,
        application_description: comment,
      });
      setName("");
      setPhone("");
      setComment("");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  function hancleSubmit(e) {
    e.preventDefault();
  }
  return (
    <StyleApplication>
      <div className="form__control">
        <form onSubmit={hancleSubmit}>
          <div className="titles">
            <h2>{t("leave_an_app_btn")}</h2>
            <h3 className="subtitle">{t("application_subtitle")}</h3>
          </div>
          <div className="inputs">
            <input
              type="text"
              value={fullName}
              onChange={(e) => setName(e.target.value)}
              placeholder={t("application_input_name")}
            />
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder={t("application_input_phone")}
            />
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder={t("application_input_dec")}
            />
          </div>
          <div className="app__btn" onClick={PostApplication}>
            <Button long>{t("send_btn")}</Button>
          </div>
        </form>
      </div>

      <div className="app__image">
        <img src={quadrat} alt="quadrats" />
      </div>
    </StyleApplication>
  );
}

const StyleApplication = styled.div`
  background-color: var(--light);
  border-radius: 2px;
  & > .form__control {
    padding: 54px 60px 0 60px;
    & > form {
      & > .titles {
        text-align: center;
        & > h2 {
          font-size: 30px;
          font-weight: 600;
          line-height: 41px;
        }
        & > .subtitle {
          font-size: 14px;
          font-weight: 400;
          line-height: 24px;
          opacity: 0.7;
          margin-bottom: 40px;
          max-width: 447px;
        }
      }

      & > .inputs {
        display: flex;
        flex-direction: column;
        gap: 41px;
        & > input {
          width: 100%;
          border: none;
          border-bottom: 1px solid var(--color-navbar);
          font-size: 18px;
          font-weight: 500;
          line-height: 34px;

          &:focus {
            outline: none;
            border-bottom: 1.8px solid #000000;
          }
          &::placeholder {
            font-size: 18px;
            font-weight: 400;
            line-height: 34px;
            opacity: 0.5;
          }
        }
      }

      & > .app__btn {
        margin: 45px 0 35px 0;
      }
    }
  }

  & > .app__image {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    img {
    }
  }

  @media (max-width: 1024px) {
    .form__control {
      padding: 25px 28px 35px 28px;
      form {
        .titles {
          .subtitle {
            margin: 0 auto 25px auto;
          }
        }
      }
    }
    .app__image {
      display: none;
    }
  }

  @media (max-width: 650px) {
    .form__control {
      form {
        .titles {
          h2 {
            font-size: 27px;
          }
          .subtitle {
            font-size: 17px;
          }
        }
      }
    }
  }
  @media (max-width: 376px) {
    .form__control {
      form {
        .titles {
          h2 {
            font-size: 24px;
            line-height: 33px;
            letter-spacing: -0.02em;
            margin-bottom: 14px;
          }
          .subtitle {
            font-size: 14px;
            line-height: 24px;
            letter-spacing: 0em;
          }
        }
      }
    }
  }
`;
