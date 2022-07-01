import React from "react";
import styled, { css } from "styled-components";
//
export default function Input({ ...props }) {
  return (
    <>
      <StyleInput {...props} type="text" />
    </>
  );
}

const StyleInput = styled.input`
  color: var(--light);
  opacity: 0.6;
  ::placeholder {
    font-size: 14px;
    font-weight: 400;
    line-height: 19px;
    color: var(--light);
  }
  ${({ search }) =>
    search &&
    css`
      width: 250px;
      padding: 13px 13px 13px 22px;
      border-radius: 53px;
      border: none;
      border: 0.7px solid #6b6b6b;
      background: transparent;

      &:active {
        border: none;
      }
      &:focus {
        outline: none;
      }
    `}
`;
