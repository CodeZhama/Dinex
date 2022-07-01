import React, { useState } from "react";
import styled from "styled-components";
//
import Title from "../../../../../components/title/Title";
import list from "./static";
import Button from "../../../../../components/button";
//
export default function Designers() {
  const [activeIndex, setActiveIndex] = useState(0);

  function changeTypeDesign(idx) {
    setActiveIndex(idx);
  }

  return (
    <StyleDesigner>
      <div className="container">
        <Title>
          <h4 className="top__title">Sizlar uchun </h4>
          <h1 className="title">Portfolio</h1>
        </Title>

        <StyleDesignList>
          <div className="type__div">
            {list.map((item, index) => {
              const { id, type, images } = item;
              return (
                <div
                  className="type__item"
                  key={id}
                  onClick={() => changeTypeDesign(index)}
                >
                  <span
                    className={
                      activeIndex === index
                        ? "type__span active__span"
                        : "type__span"
                    }
                  >
                    {images.length}
                  </span>
                  <h5 className={activeIndex === index ? "active__h5" : ""}>
                    {type}
                  </h5>
                </div>
              );
            })}
          </div>

          <div className="gallery">
            {list[activeIndex].images.map((val) => {
              return (
                <div className="picture" key={val.id}>
                  <img src={val.photo} alt={val.photo} />
                </div>
              );
            })}
          </div>

          <div className="more__btn">
            <Button seemore>Ko’proq ko’rish</Button>
          </div>
        </StyleDesignList>
      </div>
    </StyleDesigner>
  );
}

const StyleDesigner = styled.div`
  padding: 160px 0 120px 0;
  @media (max-width: 1024px) {
    padding: 120px 0;
  }
  @media (max-width: 600px) {
    padding: 60px 0;
  }
`;

const StyleDesignList = styled.div`
  .type__div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .type__item {
      display: flex;
      align-items: center;
      gap: 9px;
      cursor: pointer;

      .type__span {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 10px;
        font-weight: 600;
        line-height: 14px;
        letter-spacing: 0em;
        padding: 4px 5px;
        background: rgba(0, 33, 118, 0.1);
        border-radius: 5px;
        transition: 0.3s ease-in-out;
        &.active__span {
          background-color: var(--orange);
          color: var(--light);
        }
      }
      h5 {
        font-size: 18px;
        font-weight: 600;
        line-height: 25px;
        opacity: 0.4;
        transition: 0.3s ease-in-out;
        &.active__h5 {
          line-height: 25px;
          opacity: 1;
        }
      }
    }
  }

  .gallery {
    -webkit-column-count: 3;
    -moz-column-count: 3;
    column-count: 3;
    -webkit-column-width: 33%;
    -moz-column-width: 33%;
    column-width: 33%;
    margin-top: 42px;

    .picture {
      margin-bottom: 20px;
      display: inline-block;
      img {
        width: 100%;
        object-fit: cover;
      }
    }
  }

  .more__btn {
    margin-top: 40px;
  }

  @media (max-width: 1024px) {
    margin-top: 40px;
    .type__div {
      overflow: auto;
      .type__item {
        margin-right: 60px;
        h5 {
          white-space: nowrap;
        }
      }
      &::-webkit-scrollbar {
        width: 0;
      }
    }

    .gallery {
      -webkit-column-count: 2;
      -moz-column-count: 2;
      column-count: 2;
      -webkit-column-width: 50%;
      -moz-column-width: 50%;
      column-width: 50%;
    }
  }
`;
