import React from "react";
import styled, { css } from "styled-components";
//
export default function Title({ children, ...props }) {
  return <StyleTitle {...props}>{children}</StyleTitle>;
}

const StyleTitle = styled.div`
  & > .top__title {
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: -0.02em;
    opacity: 0.5;
    margin-bottom: 4px;
  }
  & > .title {
    font-size: 40px;
    font-weight: 600;
    line-height: 54px;
    letter-spacing: 0em;
    margin-bottom: 13px;
  }
  & > .info {
    max-width: 309px;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.02em;
  }
  ${({ info }) =>
    info &&
    css`
      .info {
        max-width: 250px;
        margin-bottom: 40px;
      }
      @media (max-width: 1200px) {
        .info {
          margin-bottom: 13px;
        }
      }
    `}

  ${({ ourserves }) =>
    ourserves &&
    css`
      .top__title {
        margin-top: 61px;
      }
      .info {
        max-width: 230px;
        margin-bottom: 113px;
      }
      @media (max-width: 1200px) {
        .top__title {
          margin-top: 0;
        }
        .info {
          margin-bottom: 30px;
        }
      }
    `}

    
    ${({ ourservesTwo }) =>
    ourservesTwo &&
    css`
      .top__title {
        margin-top: 107px;
      }
      .info {
        max-width: 230px;
        margin-bottom: 88px;
      }

      @media (max-width: 1200px) {
        display: none;
      }
    `}

    
  ${({ servecePage }) =>
    servecePage &&
    css`
      color: var(--light);
      .top__title {
        opacity: initial;
      }


    `}



    @media (max-width:1024px) {
    .top__title {
      font-size: 16px;
      font-weight: 600;
      line-height: 20px;
    }
    .title {
      font-size: 30px;
      font-weight: 600;
      line-height: 38px;
      letter-spacing: 0em;
    }
    .info {
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
    }
  }
  @media (max-width: 376px) {
    .top__title {
      font-size: 16px;
      line-height: 22px;
      letter-spacing: -0.02em;
      margin: 0 0 4px 0;
    }
    .title {
      font-size: 30px;
      line-height: 41px;
      letter-spacing: 0em;
      margin: 0 0 15px 0;
    }
    .info {
      font-size: 16px;
      line-height: 24px;
      letter-spacing: -0.02em;
      max-width: 222px;
    }
  }
`;
