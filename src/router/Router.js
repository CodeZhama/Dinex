import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//
import Layout from "../layout/main";
// Pages
import Home from "../modules/main/homePage";
import About from "../modules/main/aboutUsPage";
import Serveces from "../modules/main/servicesPage";
import PortfolioPage from "../modules/main/portfolioPage/PortfolioPage";
import Vacansy from "../modules/main/vacancyPage";
import Contact from "../modules/main/contactPage";
//

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="serveces" element={<Serveces />} />
          <Route path="toplam" element={<PortfolioPage />} />
          <Route path="vacansy" element={<Vacansy />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
