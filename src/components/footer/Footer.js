import React from "react";
import { NavLink } from "react-router-dom";
//
import styled from "styled-components";
import Logo from "../../assets/image/Logo.png";
import bg from "../../assets/image/FooterImg.png";

//
export default function Footer() {
  return (
    <FatherStyle>
      <FooterStyle>
        <div className="container">
          <div className="footer__navbar">
            <div className="logo__social">
              <img src={Logo} alt="img" />
              <p className="text__wrap">
                Biz doimo mijozlarimiz haqida qayg’uramiz va ularni qadrlaymiz
              </p>
              <h2 className="social__title">Ijtimoiy sahifalarimiz</h2>
              <div className="social">
                <i className="icon icon-instagram" />
                <i className="icon icon-telegram" />
                <i className="icon icon-facebook" />
                <i className="icon icon-twitter" />
              </div>
            </div>

            <div className="list">
              <h2 className="li__title">Bosh sahifa</h2>

              <ul>
                <li>
                  <NavLink to="/">Biz haqimizda</NavLink>
                </li>
                <li>
                  <NavLink to="/">Xizmatlar</NavLink>
                </li>
                <li>
                  <NavLink to="/">Portfolio</NavLink>
                </li>
                <li>
                  <NavLink to="/">Vakansiyalar</NavLink>
                </li>
                <li>
                  <NavLink to="/">Hamkorlar</NavLink>
                </li>
              </ul>
            </div>

            <div className="list">
              <h2 className="li__title">Xizmatlar</h2>
              <ul>
                <li>
                  <NavLink to="/">Dizayn xizmatlari</NavLink>
                </li>
                <li>
                  <NavLink to="/">Arxitektura</NavLink>
                </li>
                <li>
                  <NavLink to="/">Maket yasash</NavLink>
                </li>
                <li>
                  <NavLink to="/">Toposurat va geologiya</NavLink>
                </li>
                <li>
                  <NavLink to="/">Expertiza va texnik taftish</NavLink>
                </li>
              </ul>
            </div>

            <div className="list">
              <h2 className="li__title">Vakansiyalar</h2>
              <ul>
                <li>
                  <NavLink to="/">Kompaniya bo`limlari</NavLink>
                </li>
                <li>
                  <NavLink to="/">Bo`sh ish o`rinlari</NavLink>
                </li>
                <li>
                  <NavLink to="/">So`nggi qo`shilganlar</NavLink>
                </li>
              </ul>
            </div>

            <div className="list">
              <h2>Kontaktlar</h2>
              <ul>
                <li className="info__dinex">
                  <NavLink to="/">
                    <i className="icon icon-message icon-sm" />
                    <p>dinex@gmail.com</p>
                  </NavLink>
                </li>
                <li className="info__dinex">
                  <NavLink to="/">
                    <i className="icon icon-phone icon-sm" />
                    <p>+998 55 500 55 25</p>
                  </NavLink>
                </li>
                <li className="info__dinex">
                  <NavLink to="/">
                    <i className="icon icon-location icon-sm" />
                    <p>
                      Abdulla qodiriy ko’chasi, 1A, <br />
                      Mo’ljal: Oliy sud
                    </p>
                  </NavLink>
                </li>
              </ul>
            </div>
            {/* 
            <div className="logo__social__respone">
              <img src={Logo} alt="img" />
              <p className="text__wrap">
                Biz doimo mijozlarimiz haqida qayg’uramiz va ularni qadrlaymiz
              </p>
              <h2 className="social__title">Ijtimoiy sahifalarimiz</h2>
              <div className="social">
                <i className="icon icon-instagram" />
                <i className="icon icon-telegram" />
                <i className="icon icon-facebook" />
                <i className="icon icon-twitter" />
              </div>
            </div> */}
          </div>
        </div>
      </FooterStyle>
      <div className="container">
        <FooterBottomStyle>
          <div>2021-2022 Denux Ebginering</div>
          <div>Terms of privacy policy</div>
        </FooterBottomStyle>
      </div>
    </FatherStyle>
  );
}

const FatherStyle = styled.div`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  color: var(--light);
`;
const FooterStyle = styled.div`
  padding: 153px 0 100px 0;
  border-bottom: 1px solid #737373;
  .footer__navbar {
    display: flex;
    align-items: flex-start;
    gap: 65px;
    .logo__social {
      display: flex;
      align-items: center;
      flex-direction: column;
      text-align: center;

      img {
        width: 100px;
        margin-bottom: 20px;
      }

      .text__wrap {
        max-width: 255px;
        font-size: 16px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0em;
        margin-bottom: 45px;
      }
      .social__title {
        font-size: 18px;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: 0em;
        margin-bottom: 24px;
      }

      .social {
        display: flex;
        align-items: center;
        gap: 37px;
        i {
          background-color: var(--light);
        }
      }
    }

    /* .logo__social__respone {
      display: none;
    } */

    .list {
      & > h2 {
        font-size: 24px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0em;
        white-space: nowrap;
        margin-bottom: 21px;
      }
      ul {
        display: flex;
        flex-direction: column;
        gap: 26px;

        li {
          cursor: pointer;
          a {
            display: flex;
            align-items: center;
            gap: 11px;
            color: var(--color-navbar);
            &:hover {
              color: var(--light);
              i {
                background-color: var(--light);
              }
            }
            i {
              background-color: var(--color-navbar);
            }
          }
        }
      }
    }
  }

  @media (max-width: 1200px) {
    padding: 60px 0;
    .footer__navbar {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      /* .logo__social {
        display: none;
      } */

      .logo__social__respone {
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          width: 100px;
          margin-bottom: 20px;
        }

        .text__wrap {
          max-width: 255px;
          font-size: 16px;
          font-weight: 400;
          line-height: 22px;
          letter-spacing: 0em;
          margin-bottom: 45px;
        }
        .social__title {
          font-size: 18px;
          font-weight: 400;
          line-height: 18px;
          letter-spacing: 0em;
          margin-bottom: 21px;
        }

        .social {
          display: flex;
          align-items: center;
          gap: 37px;
          i {
            background-color: var(--light);
          }
        }
      }
      .list {
        text-align: center;

        ul {
          li {
            a {
              display: flex;
              align-content: center;
              justify-content: center;
            }
          }
        }
      }
    }
  }
  @media (max-width: 992px) {
    
    .footer__navbar {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (max-width: 600px) {
    .footer__navbar {
      display: grid;
      grid-template-columns: 1fr;
    }
  }
`;

const FooterBottomStyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 14px 0 17px 0;
  div {
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
  }
`;
