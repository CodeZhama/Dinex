import React from "react";
import styled from "styled-components";

//
import BackRouter from "../../../../../components/backRouter";
import bg from "../../../../../assets/image/showcase.png";
import ShowcaseTitle from "../../../../../components/showcaseTitle/ShowcaseTitle";
import Button from "../../../../../components/button/Button";
//
export default function Avatar() {
  return (
    <StyleAvatar>
      <div className="container">
        <div className="avatar">
          <BackRouter>Xizmatlar</BackRouter>

          <div className="projects">
            <ShowcaseTitle servesPage>
              <h4>Munosibini tanlang!</h4>
              <h1 className="purposi">Eng sifatli xizmatlar</h1>
              <p className="comment">
                Uyingiz uchun munosib arxitektura, landshaft, eksteryer va
                interyer xizmatlarini siz aziz mijozlarimiz uchun taklif qilmiz,
                hamda samarali hamkorlikka chorlaymiz
              </p>
            </ShowcaseTitle>

            <div className="plus__project">
              <h1 className="count">+25</h1>
              <h2 className="count__text">Muvaffaqiyatli loyihalar</h2>
            </div>
          </div>

          <div className="btns">
            <Button>Ariza qoldirish</Button>
            <Button outline>
              <p>Bizning loyihalar</p>
              <i className="icon icon-top-right icon-very-sm" />
            </Button>
          </div>
        </div>
      </div>
    </StyleAvatar>
  );
}

const StyleAvatar = styled.div`
  background-image: url(${bg});
  min-height: 100vh;
  padding: 110px 0 78px 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  .avatar {
    .projects {
      display: flex;
      margin-top: 81px;
      gap: 195px;
      .plus__project {
        color: var(--light);
        text-align: center;

        & > h1 {
          font-size: 110px;
          font-weight: 600;
          line-height: 150px;
        }
        & > h2 {
          max-width: 283px;
          font-size: 40px;
          font-weight: 700;
          line-height: 65px;
          letter-spacing: -0.02em;
        }
      }
    }

    .btns {
      display: flex;
      align-items: center;
      gap: 51px;
      margin-top: 154px;
    }
  }

  @media (max-width: 1024px) {
    min-height: 939px;
    padding: 110px 0 0;
    .avatar {
      .projects {
        flex-direction: column;
        gap: 54px;
        .plus__project {
          text-align: initial;
          h1 {
            font-size: 80px;
            line-height: 109px;
            letter-spacing: -0.02em;
          }
          h2 {
            font-size: 26px;
            line-height: 45px;
            letter-spacing: -0.02em;
            max-width: 324px;
          }
        }
      }
      .btns {
        margin: 75px 0 0 0;
        gap: 57px;
      }
    }
  }

  @media (max-width: 600px) {
    min-height: 750px;
    .avatar {
      .projects {
        gap: 20px;
        margin: 0;
        .plus__project {
          display: flex;
          flex-direction: column;
          align-items: center;
          h1 {
            text-align: center;
            margin-bottom: 13px;
          }
        }
      }

      .btns {
        margin-top: 60px;
        gap: 30px;
      }
    }
  }
`;
