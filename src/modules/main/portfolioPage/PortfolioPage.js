import React from "react";
import styled from "styled-components";
//
import Banner from "./section/banner/Banner";
import Designers from "./section/designers/Designers";
import LeaveApp from "./section/leaveApp/LeaveApp";
//
export default function PortfolioPage() {
  return (
    <StyledPortfolio>
      <Banner />
      <Designers />
      <LeaveApp/>
    </StyledPortfolio>
  );
}

const StyledPortfolio = styled.div``;
