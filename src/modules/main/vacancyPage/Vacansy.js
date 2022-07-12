import React, { useState, useEffect } from "react";
import styled from "styled-components";
//
import Cadre from "./section/cadre/Cadre";
import ShowcaseVacant from "./section/showcase/ShowcaseVacant";
import modalbg from "../../../assets/image/servesbg2.png";
import Application from "../../../components/application";
import Api from "../../../services/api/index";

//
export default function Vacansy() {
  const [modalActive, setModalActive] = useState(false);

  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState([]);
  const [curVacant, setCurVacant] = useState(null);
  //

  useEffect(() => {
    if (modalActive) document.body.style.overflow = "hidden";
    else document.body.removeAttribute("style");
    return () => {
      document.body.removeAttribute("style");
    };
  }, [modalActive]);

  useEffect(() => {
    getAllCadre();
  }, []);

  async function getAllCadre() {
    try {
      setLoading(true);
      const response = await Api.get("/service", {
        params: {
          page: 0,
          size: 10,
        },
      });
      setServices(response.data.data.services);
      console.log(response.data.data.services);
      setCurVacant(response.data.data.services[0]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <StyleVacansy>
      {modalActive ? (
        <div
          className={modalActive ? "modal__active transition" : "modal__active"}
        >
          <i
            className="icon icon-close "
            onClick={() => setModalActive(false)}
          />
          <Application />
        </div>
      ) : (
        ""
      )}

      <ShowcaseVacant />
      <Cadre
        setModalActive={setModalActive}
        loading={loading}
        services={services}
        curVacant={curVacant}
        setCurVacant={setCurVacant}
      />
    </StyleVacansy>
  );
}

const StyleVacansy = styled.div`
  position: relative;
  .modal__active {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-image: url(${modalbg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 9999999;
    animation: modal 0.2s linear;
    & > i {
      position: absolute;
      top: 46px;
      right: 100px;
      background-color: var(--light);
    }
  }
  & > .transition {
    @keyframes modal {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
  @media (max-width: 1024px) {
    .modal__active {
      padding: 0 25px;
      & > i {
        top: 35px;
        right: 10px;
        width: 20px;
      }
    }
  }
`;
