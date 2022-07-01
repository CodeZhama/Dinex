import React from "react";

//
// import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar/Navbar";
//
export default function MainLayot() {
  return (
    <>
      <Navbar />
           <Outlet />
      <Footer />
    </>
  );
}
