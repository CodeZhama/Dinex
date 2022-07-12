import React, { useState, useEffect } from "react";
import styled from "styled-components";
//sections
import Vacansy from "./section/vacancy";
import Api from "../../../services/api";
import Showcase from "./section/showcase";
import Partner from "./section/partner";
import Petition from "./section/petition";
import Portfolio from "./section/portfolio";
import OurServes from "./section/ourserves";
import Modal from "../../../components/modal";
import Application from "../../../components/application";
//

export default function Home() {
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [typeServec, setTypeServec] = useState([]);

  useEffect(() => {
    getServecesData();
  }, []);

  async function getServecesData() {
    try {
      setLoading(true);
      const { data } = await Api.get("service", {
        params: {
          page: 0,
          size: 10,
        },
      });
      if (data) {
        setTypeServec(data.data.services);
        
      } else {
        console.lof("Malumot topilmadi");
      }
    } catch (error) {
      setLoading(true);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }


  return (
    <StyleHome>
      <Showcase setModal={setModal} />
      <OurServes loading={loading} typeServec={typeServec} />
      <Portfolio />
      <Petition />
      <Partner />
      <Vacansy />
      {modal ? (
        <Modal setModal={setModal}>
          <Application />
        </Modal>
      ) : null}
    </StyleHome>
  );
}

const StyleHome = styled.div``;
