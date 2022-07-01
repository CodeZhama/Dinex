import React from "react";
import styled from "styled-components";
//

//
export default function ForApp({ children, ...props }) {
  return <StyleForApp {...props}>{children}</StyleForApp>;
}

const StyleForApp = styled.div`
  .for__app {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo__text {
      display: flex;
      flex-direction: column;
      align-items: center;
      & > img {
        width: 329px;
      }
      & > h3 {
        font-size: 30px;
        font-weight: 600;
        line-height: 95px;
        letter-spacing: -0.02em;
        color: var(--light);
      }
    }
  }

  @media (max-width: 1040px) {
    .for__app {
      flex-direction: column;
      gap: 47px;
    }
  }
  @media (max-width: 768px) {
    .for__app {
      .logo__text {
        & > img {
          width: 200px;
        }
        & > h3 {
          font-size: 22px;
          line-height: 30px;
          letter-spacing: -0.02em;
          margin-top: 5px;
        }
      }
    }
  }
`;
