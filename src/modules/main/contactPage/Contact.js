import React from "react";
import styled from "styled-components";
/////
import BackRouter from "../../../components/backRouter";
import bg from "../../../assets/image/cantact.png";
import MapLocation from "../../../components/googleMap/GoogleMaps";
////
export default function Contact() {
  return (
    <StyledContact>
      <div className="container">
        <BackRouter>Kontakt</BackRouter>
        <div className="adress">
          <MapLocation />
        </div>
      </div>
    </StyledContact>
  );
}

const StyledContact = styled.div`
  padding: 110px 0 0 0;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  .adress {
    position: relative;
    padding-top: 31px;
  }
  @media (max-width: 992px) {
    padding: 228px 0 0 0;
  }
`;
