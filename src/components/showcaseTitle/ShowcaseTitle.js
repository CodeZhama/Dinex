import React from "react";
import styled, { css } from "styled-components";

//
export default function ShowcaseTitle({ children, ...props }) {
  return <StyleShowcaseTitle {...props}>{children}</StyleShowcaseTitle>;
}

const StyleShowcaseTitle = styled.div`
  color: white;
  & > h4 {
    font-size: 22px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
    margin-bottom: 7px;
  }
  & > .purposi {
    max-width: 772px;
    font-size: 50px;
    font-weight: 600;
    line-height: 65px;
    letter-spacing: -0.02em;
    margin: 0 0 22px 0;
  }
  & > .comment {
    max-width: 610px;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0em;
    margin: 0 0 90px 0;
  }

  ${({ aboutSection }) =>
    aboutSection &&
    css`
      margin-top: 92px;
    `}

  ${({ servesPage }) =>
    servesPage &&
    css`
      h4 {
        padding-top: 20px;
      }

      @media (max-width: 1024px) {
        .comment {
          margin: 0;
        }
      }
      @media (max-width: 600px) {
        .comment {
          margin: 0 !important;
        }
      }
    `}
    
    ${({ portfolioPage }) =>
    portfolioPage &&
    css`
      h4 {
        padding-top: 55px;
      }
    `}

     
    ${({ vacantPage }) =>
    vacantPage &&
    css`
      h4 {
        padding-top: 55px;
      }
    `}



  
  @media (max-width: 1024px) {
    h4 {
      font-size: 20px;
      font-weight: 400;
      line-height: 27px;
      letter-spacing: 0em;
      margin-bottom: 10px;
    }
    .purposi {
      font-size: 40px;
      font-weight: 700;
      line-height: 60px;
      letter-spacing: -0.02em;
      max-width: 578px;
      margin: 0 0 24px 0;
    }
    .comment {
      font-size: 15px;
      font-weight: 400;
      line-height: 26px;
      letter-spacing: 0em;
      max-width: 604px;
    }
  }
  @media (max-width: 600px) {
    h4 {
      font-size: 20px;
      line-height: 27px;
      margin-bottom: 17px;
    }
    .purposi {
      margin: 0 0 26px 0;
      max-width: 333px;
      font-size: 22px;
      line-height: 40px;
      letter-spacing: -0.02em;
    }
    .comment {
      max-width: 370px;
      font-size: 15px;
      font-weight: 400;
      line-height: 26px;
      letter-spacing: -0.02em;
      margin: 0 0 90px 0;
    }
  }
`;
