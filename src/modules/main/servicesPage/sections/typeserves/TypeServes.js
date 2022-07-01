import React, { useState } from "react";
import styled from "styled-components";

//
import bg from "../../../../../assets/image/servesbg.png";
import Button from "../../../../../components/button/Button";
import Title from "../../../../../components/title/Title";
///
export default function TypeServes() {
  const [index, setIndex] = useState(0);
  const [design, setdesign] = useState([
    {
      id: 1,
      type: "Interyer dizayn",
      info: "Interer dizayneri kasbi zamonaviy dunyodagi eng nufuzli kasblardan biridir. Va bu kasb faqat ijodkorlarning tanlovi degan ishonch mutlaqo noto'g'ri. Muvaffaqiyatli dizayner bo'lish uchun nima qilish kerak?Agar siz uyingiz uchun betakror dizayn qilinshni hohlasangiz, albatta muttaxassislarga murojat qiling.Arxitektura nazariyasi, qurilish ishlari uchun standartlar, yoritish va fitodizayn, shaharsozlik asoslari kabi bir nechta tegishli fanlarni o'zlashtirish kerak.",
      isActive: true,
    },
    {
      id: 2,
      type: "Eksteryer dizayn",
      info: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias reprehenderit quasi necessitatibus qui consectetur asperiores tenetur dolorum. Quisquam culpa iste eum maiores magnam repellendus nulla quibusdam, ipsam ad, consectetur corporis.",
      isActive: false,
    },
    {
      id: 3,
      type: "Landshaft dizayn",
      info: " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything",
      isActive: false,
    },
    {
      id: 4,
      type: "Arxitektura",
      info: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias reprehenderit quasi necessitatibus qui consectetur asperiores tenetur dolorum. Quisquam culpa iste eum maiores magnam repellendus nulla quibusdam, ipsam ad, consectetur corporis.",
      isActive: false,
    },
    {
      id: 5,
      type: "Ekspertiza va texnik taftish xizmati",
      info: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias reprehenderit quasi necessitatibus qui consectetur asperiores tenetur dolorum. Quisquam culpa iste eum maiores magnam repellendus nulla quibusdam, ipsam ad, consectetur corporis.",
      isActive: false,
    },
    {
      id: 6,
      type: "Toposurat va geologiya",
      info: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias reprehenderit quasi necessitatibus qui consectetur asperiores tenetur dolorum. Quisquam culpa iste eum maiores magnam repellendus nulla quibusdam, ipsam ad, consectetur corporis.",
      isActive: false,
    },
    {
      id: 7,
      type: "Maket yasash",
      info: " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      isActive: false,
    },
  ]);

  function handleInfo(idd, idkey) {
    setIndex(idd);
    setdesign(
      design.map((item) =>
        item.id === idkey
          ? { ...item, isActive: true }
          : { ...item, isActive: false }
      )
    );
  }

  return (
    <StyleTypeServes>
      <div className="container">
        <div className="type__servece">
          <Title servecePage>
            <h3 className="top__title">Sizlar uchun</h3>
            <h1 className="title">Bizning xizmatlar</h1>
          </Title>

          <div className="type">
            {design.map((item, idx) => {
              const { type, id, isActive } = item;
              return (
                <div
                  className={isActive ? "type__item active" : "type__item"}
                  key={id}
                  onClick={() => handleInfo(idx, id)}
                >
                  {type}
                </div>
              );
            })}
          </div>

          <div className="type__more">
            <h1>{design[index].type}</h1>
            <p>{design[index].info}</p>
          </div>

          <div className="submit__btn">
            <Button>Ariza qoldirish</Button>
          </div>
        </div>
      </div>
    </StyleTypeServes>
  );
}

const StyleTypeServes = styled.div`
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 87px 0;
  .type__servece {
    color: var(--light);
    .type {
      /* display: flex;
      justify-content: space-between; */
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
      text-align: center;
      margin-top: 50px;

      &__item {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 55px 0;
        transition: 300ms ease-in;
        color: var(--light);
        font-size: 17px;
        font-weight: 600;
        line-height: 23px;
        border-right: 1px solid var(--light);
        cursor: pointer;

        &:last-child {
          border: none;
        }
        &.active {
          transform: scaleY(1.03);
          background: rgba(0, 0, 0, 0.7);
        }
      }
    }

    .type__more {
      padding: 50px 0 30px 0;
      border-bottom: 1px solid var(--light);

      & > h1 {
        font-size: 38px;
        font-weight: 600;
        line-height: 52px;
      }
      & > p {
        min-height: 180px;
        margin-top: 20px;
        font-size: 22px;
        font-weight: 600;
        line-height: 36px;
      }
    }

    .submit__btn {
      margin-top: 57px;
    }
  }

  @media (max-width: 1024px) {
    padding: 60px 0;
  }
  @media (max-width: 1024px) {
    .type__servece {
      .type {
        overflow-x: auto;
        overflow-y: hidden;
        &__item {
          min-width: 160px;
          padding: 38px 0;
          font-size: 17px;
          font-weight: 600;
          line-height: 23px;
        }
        &.type::-webkit-scrollbar {
          width: 0;
        }
      }

      .type__more {
        padding: 87px 0 25px 0;
        & > p {
          font-size: 16px;
          line-height: 26px;
          max-width: 668px;
        }
      }
      .submit__btn {
        margin-top: 63px;
      }
    }
  }
  @media (max-width: 376px) {
    .type__servece {
      .type {
        &__item {
          padding: 14px 0;
          font-size: 16px;
          line-height: 22px;
          letter-spacing: 0em;
          border: none !important;
        }
      }
      .type__more {
        padding: 33px 0 25px 0;
        
      }
    }
  }
`;
