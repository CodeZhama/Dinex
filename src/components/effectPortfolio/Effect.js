import React from "react";
import styled, { css } from "styled-components";
//
export default function Effect({ children, ...props }) {
  return <EffectStyle {...props}>{children}</EffectStyle>;
}

const EffectStyle = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  .bg__img {
    width: 100%;
    transition: 0.26s linear;
  }
  &:hover {
    z-index: 1;
    img {
      transform: scale(1.2);
    }
  }
  .inner__style {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6));
    opacity: 0;
    z-index: 1;
    .text__effect {
      position: absolute;
      left: 50%;
      transform: translate(-50%, 0);
      bottom: -40px;
      font-size: 36px;
      font-weight: 400;
      line-height: 45px;
      letter-spacing: -0.02em;
      transition: all 0.2s linear;
      color: var(--light);
    }

    .img__effect {
      position: absolute;
      width: 55px;
      height: 55px;
      right: 5.5px;
      top: 479px;
      z-index: 1;
      top: auto;
      bottom: 0;
    }
    &:hover {
      opacity: 1;
      .text__effect {
        bottom: 44%;
      }
    }
  }

  ${({ heigthResponse }) =>
    heigthResponse &&
    css`
      @media (max-width: 1200px) {
        display: none;
      }
      @media (max-width: 450px) {
        display: none;
      }
    `}

  ${({ center }) =>
    center &&
    css`
      display: none;
      @media (max-width: 1200px) {
        display: block;
      }
      @media (max-width: 450px) {
        .bg__img{
          min-height: 371px;
        }
      }
    `}
`;
