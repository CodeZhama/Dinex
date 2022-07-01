import React from "react";
import styled, { css } from "styled-components";
//
import bg from "../../assets/image/vacantInfo.png";
//
export default function VacantInfo({ children, ...props }) {
  return <StyleVacantInfo {...props}>{children}</StyleVacantInfo>;
}

const StyleVacantInfo = styled.div`
  width: 100%;
  border-radius: 5px;
  .profission {
    padding: 18px 0 19px 20px;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    color: var(--light);
    font-size: 26px;
    font-weight: 600;
    line-height: 35px;
    border-radius: 5px 5px 0 0;
  }

  .contant {
    border: 1px solid #e9e9e9;
    padding: 22px 20px 50px 20px;

    & > h4 {
      font-size: 16px;
      font-weight: 600;
      line-height: 22px;
      margin-bottom: 15px;
    }

    .information {
      display: flex;
      align-items: center;
      gap: 134px;

      &__wrap {
        display: flex;
        align-items: center;
        gap: 12px;
        &__item {
          display: flex;
          flex-direction: column;
          gap: 10px;
          .text__right {
            font-size: 16px;
            font-weight: 600;
            line-height: 22px;
          }
          .text__left {
            font-size: 16px;
            font-weight: 600;
            line-height: 22px;
            letter-spacing: 0em;
            opacity: 0.6;
          }
        }
      }
    }

    .responsibilities {
      margin: 36px 0;
      & > h2 {
        margin-bottom: 15px;
        font-size: 16px;
        font-weight: 600;
        line-height: 22px;
      }
      & > p {
        font-size: 16px;
        font-weight: 600;
        line-height: 26px;
        color: #5a5564;
      }
    }
    .offer {
      margin-bottom: 36px;
      & > h2 {
        font-size: 16px;
        font-weight: 600;
        line-height: 22px;
        margin-bottom: 15px;
      }
      & > p {
        font-size: 16px;
        font-weight: 600;
        line-height: 26px;
        color: #5a5564;
      }
    }
  }

  ${({ desktop }) =>
    desktop &&
    css`
      @media (max-width: 1024px) {
        display: none;
      }
    `}

  @media (max-width:576px) {
    .profission {
      font-size: 24px;
      line-height: 33px;
      letter-spacing: 0em;
    }

    .contant {
      padding: 25px 10px;
      &h4 {
        font-size: 17px;
        line-height: 23px;
      }
      .information {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
        &__wrap {
          &__item {
            .text__left {
              font-size: 16px;
              line-height: 22px;
            }
            .text__right {
              font-size: 16px;
              line-height: 22px;
              letter-spacing: 0em;
            }
          }
        }
      }
      .responsibilities,
      .offer {
        margin-top: 30px;
        h2 {
          font-size: 17px;
          font-weight: 600;
          line-height: 23px;
          letter-spacing: 0em;
        }
        p {
          font-size: 16px;
          font-weight: 600;
          line-height: 26px;
          letter-spacing: 0em;
        }
      }
      .offer {
        margin-bottom: 20px;
      }
    }
  }
`;
