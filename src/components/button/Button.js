import React from "react";
import styled, { css } from "styled-components";
//
export default function Button({ children, ...props }) {
  return <ButtonStyle {...props}>{children}</ButtonStyle>;
}

const ButtonStyle = styled.button`
  padding: 14px 26px;
  background-color: var(--orange);
  border-radius: 2px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  color: var(--light);

  ${({ bglight }) =>
    bglight &&
    css`
      display: flex;
      align-items: center;
      gap: 20px;
      padding: 14px 21px;
      background: none;
      border: 0.7px solid var(--orange);
      border-radius: 2px;
      font-size: 16px;
      font-weight: 600;
      line-height: 22px;
      background-color: var(--color-bg);
      color: var(--dark);

      @media (max-width: 600px) {
        width: 100%;
        justify-content: center;
      }
    `}
  ${({ long }) =>
    long &&
    css`
      width: 100%;
      color: var(--light);
    `}

    ${({ blue }) =>
    blue &&
    css`
      display: flex;
      justify-content: flex-start;
      gap: 19px;
      background: none;
      color: var(--orange);
      padding: 0;
      i {
        background-color: var(--orange);
      }

      @media (max-width: 1200px) {
      }
    `}


    ${({ outline }) =>
    outline &&
    css`
      display: flex;
      gap: 15px;
      background-color: transparent;
      padding: 0;
      font-size: 18px;
      font-weight: 400;
      line-height: 25px;
      letter-spacing: 0em;
      i {
        background-color: var(--light);
      }
      @media (max-width: 376px) {
        font-size: 16px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0em;
        white-space: nowrap;
        padding: 0;
      }
    `}

    ${({ seemore }) =>
    seemore &&
    css`
      width: 100%;
      text-align: center;
      background-color: var(--light);
      border: 1px solid #bfbfbf;
      border-radius: 2px;
      color: var(--dark);
      &:hover {
        background-color: #ffe1b7;
        border: 1px solid #ffe1b7;
      }
    `}


    @media (max-width: 600px) {
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 0em;
    white-space: nowrap;
  }
`;
