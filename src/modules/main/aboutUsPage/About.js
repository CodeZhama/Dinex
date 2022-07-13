import React from "react";
import styled from "styled-components";

//
import ShowcaseAbout from "./section/showcase/ShowcaseAbout";
import AboutUs from "./section/aboutUs";
import Team from "./section/team";
import Proposition from "./section/proposition";
import AboutPartner from "./section/aboutpartner";
//
export default function About() {
  window.scrollTo(0, 0);

  return (
    <AboutStyle>
      <ShowcaseAbout />
      <AboutUs />
      <Team />
      <Proposition />
      <AboutPartner />
    </AboutStyle>
  );
}

const AboutStyle = styled.div``;
