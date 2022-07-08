import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

//
export default function Back({ children, ...props }) {
  const { t } = useTranslation();
  let navigate = useNavigate();

  function handleNavigate(url) {
    navigate(url);
  }

  return (
    <BackStyle {...props}>
      <i
        className="icon icon-arrow-right icon-sm"
        onClick={() => handleNavigate("/")}
      />
      <div className="back__active">
        <span className="back" onClick={() => handleNavigate("/")}>
          {t("navbar_home")}
        </span>
        <span className="slash">/</span>
        <span className="current">{children}</span>
      </div>
    </BackStyle>
  );
}

const BackStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  & > i {
    transform: rotate(180deg);
    background-color: var(--light);
  }
  .back__active {
    display: flex;
    align-items: center;
    gap: 11px;
    .back {
      color: var(--light);
      opacity: 0.5;
    }
    .slash {
      color: var(--light);
      opacity: 0.5;
    }
    .current {
      color: var(--light);
    }
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;
