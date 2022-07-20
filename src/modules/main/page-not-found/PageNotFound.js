import React from "react";
import styled from "styled-components";
import Button from "../../../components/button";
import { useNavigate } from "react-router-dom";

export default function PageNotFound() {
  const navigate = useNavigate();
  function goHome() {
    navigate("/");
  }
  return (
    <StylePageNotFound>
      <div className="content">
        <h1>Page Not Found</h1>
        <p>
          Sorry, the page you are looking for doesn't exist or has been moved.
          Here are some helpful links:
        </p>

        <div className="btn__home" onClick={goHome}>
          <Button pageNotFound>
            <i className="icon icon-arrow-right" />
            <p className="btn__home__text">Go Back</p>
          </Button>
        </div>
      </div>
    </StylePageNotFound>
  );
}

const StylePageNotFound = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .content {
    text-align: center;
    h1 {
      font-size: 60px;
      font-weight: 600;
      line-height: 72px;
      letter-spacing: -0.02em;
      margin-bottom: 15px;
    }
    p {
      font-size: 20px;
      font-weight: 400;
      line-height: 30px;
      letter-spacing: 0em;
      max-width: 600px;
    }
    .btn__home {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 30px;
    }
  }
`;
