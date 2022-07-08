import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import Application from "../application";

export default function Modal({ children, setModal, ...props }) {
  useEffect(() => {
    let body = document.body;

    body.classList.add("kill-scroll");

    return () => {
      body.classList.remove("kill-scroll");
    };
  }, []);

  function closeModal() {
    setModal(false);
  }
  return (
    <StyledModal {...props}>
      <div className="container">
        <div className="modal__item">
          <div className="close__icon" onClick={closeModal}>
            <i className="icon icon-close" />
          </div>
          <div>{children}</div>
        </div>
      </div>
    </StyledModal>
  );
}

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #00000070;
  backdrop-filter: blur(10px);
  z-index: 999999999;
  .modal__item {
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    .close__icon {
      position: absolute;
      top: 6%;
      right: 20%;
      i {
        background-color: var(--light);
      }
    }
  }

  ${({ sliderPortfolio }) =>
    sliderPortfolio &&
    css`
      .modal__item {
        position: inherit;
        padding: 60px 0;
        display: inherit;
        .close__icon {
          right: 100px;
        }
        .slick-slider {
          .card {
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            height: 643px;
            img {
              width: 100%;
              object-fit: fill !important;
            }
          }
        }
      }
      @media (max-width: 1024px) {
        .modal__icon {
          padding: 540px 40px;
          .slick-slider {
            .card {
              height: 600px ;
            }
          }
        }
      }
    `}
  @media (max-width: 768px) {
    .modal__item {
      padding: 60px 20px;
      .close__icon {
        top: 2%;
        right: 2%;
      }
    }
  }
`;
