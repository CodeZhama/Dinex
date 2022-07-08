import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from "../../../components/modal";
import Api from "../../../services/api";
import Slider from "react-slick";
//
import Banner from "./section/banner/Banner";
import Designers from "./section/designers/Designers";
import LeaveApp from "./section/leaveApp/LeaveApp";
//

export default function PortfolioPage() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [curPortfoliSilder, setCurPortfolioSlider] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentSer, setCurSer] = useState(null);
  const [modal, setModal] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  useEffect(() => {
    getPortfolioData();
  }, []);

  async function getPortfolioData() {
    setLoading(true);
    try {
      const res = await Api.get("/service", {
        params: {
          page: 0,
          limit: 10,
        },
      });
      setServices(res.data.data.services);
      setCurSer(res.data.data.services[0]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <StyledPortfolio>
      <Banner />
      <Designers
        setModal={setModal}
        loading={loading}
        curPortfoliSilder={curPortfoliSilder}
        activeIndex={activeIndex}
        currentSer={currentSer}
        services={services}
        setActiveIndex={setActiveIndex}
        setCurSer={setCurSer}
        setCurPortfolioSlider={setCurPortfolioSlider}
      />
      <LeaveApp />
      {modal ? (
        <Modal sliderPortfolio setModal={setModal}>
          <Slider {...settings}>
            {curPortfoliSilder &&
              curPortfoliSilder?.map((item, index) => {
                return (
                  <div className="card" key={index}>
                    <img
                      src={"http://admin.dinex.uz/files/" + item}
                      alt="img"
                    />
                  </div>
                );
              })}
          </Slider>
        </Modal>
      ) : null}
    </StyledPortfolio>
  );
}

const StyledPortfolio = styled.div``;
