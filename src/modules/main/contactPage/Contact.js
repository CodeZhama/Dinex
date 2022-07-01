import React from "react";
import styled from "styled-components";
/////
import GoogleMaps from "../../../components/googleMap/GoogleMaps";
import BackRouter from "../../../components/backRouter";
import bg from "../../../assets/image/cantact.png";
////
export default function Contact() {
  return (
    <StyledContact>
      <div className="location"></div>
      <div className="container">
        <BackRouter>Kontakt</BackRouter>
        <GoogleMaps />
      </div>
    </StyledContact>
  );
}

const StyledContact = styled.div`
  position: relative;
  padding: 110px 0 0 0;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media (max-width: 992px) {
    padding: 228px 0 0 0;
  }
`;
