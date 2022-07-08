import React, { useEffect, useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import i18next from "i18next";
import RootContext from "../../context/Context";
///
import Logo from "../../../src/components/logo";
import Input from "../input/Input";
import { useTranslation } from "react-i18next";
//
export default function Navbar() {
  let navigate = useNavigate();
  const { lang, curtLangId, setCurLangId } = useContext(RootContext);
  const { t } = useTranslation();
  //
  const [navModal, setNavModal] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [fix, setFix] = useState(false);

  //
  let activeStyle = {
    borderBottom: "2px solid #ffffff",
  };

  function toFixed() {
    if (window.scrollY >= 30) {
      setFix(true);
    } else {
      setFix(false);
    }
  }
  window.addEventListener("scroll", toFixed);

  function openSearchFunc() {
    setOpenSearch(true);
  }
  function closeSearchFunc() {
    setOpenSearch(false);
  }

  function openNavbar() {
    setNavModal(true);
  }

  //
  function modalNavigate(url) {
    navigate(url);
    setNavModal(false);
  }

  function handleChaneLang(code, id) {
    i18next.changeLanguage(code);
    setCurLangId(id);
  }

  useEffect(() => {
    if (navModal) document.body.style.overflow = "hidden";
    else document.body.removeAttribute("style");
    return () => {
      document.body.removeAttribute("style");
    };
  }, [navModal]);

  return (
    <StyledNavbar>
      {navModal ? (
        <div
          className={`modal__nav ${
            navModal ? "active__modal" : "unactive__modal"
          }`}
        >
          <div className="logo__close">
            <Logo />
            <div>
              <i
                className="icon icon-close"
                onClick={() => setNavModal(false)}
              />
            </div>
          </div>
          <div className="modal__flex">
            <ul>
              <li onClick={() => modalNavigate("/")}>{t("navbar_home")}</li>
              <li onClick={() => modalNavigate("about")}>
                {t("navbar_about_us")}
              </li>
              <li onClick={() => modalNavigate("serveces")}>
                {t("navbar_service")}
              </li>
              <li onClick={() => modalNavigate("toplam")}>
                {t("navbar_portfolio")}
              </li>
              <li onClick={() => modalNavigate("vacansy")}>
                {t("navbar_vacanse")}
              </li>
              <li onClick={() => modalNavigate("contact")}>
                {t("navbar_contact")}
              </li>
            </ul>
            <div className="modal__social">
              <i className="icon icon-facebook" />
              <i className="icon icon-telegram" />
              <i className="icon icon-twitter" />
            </div>

            <div className="modal__language">
              {lang.map((item) => {
                const { code, id, text_uz, text_ru } = item;
                return (
                  <p
                    key={id}
                    className={
                      curtLangId === id
                        ? "modal__language__item change__modal__color"
                        : "modal__language__item"
                    }
                    onClick={() => handleChaneLang(code, id)}
                  >
                    {curtLangId === 1 ? text_ru : text_uz}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}

      <div className={fix ? "simple fixed" : "simple"}>
        <div className="container">
          <div className="navbar">
            <div className="logo">
              <Logo />
            </div>

            <div className="language">
              {lang.map((item) => {
                const { code, id, text_uz, text_ru } = item;
                return (
                  <p
                    key={id}
                    className={
                      curtLangId === id
                        ? "language_item change_color"
                        : "language_item"
                    }
                    onClick={() => handleChaneLang(code, id)}
                  >
                    {curtLangId === 1 ? text_ru : text_uz}
                  </p>
                );
              })}
            </div>

            <div className="nav">
              <nav className="nav__list">
                <ul className="nav__ul">
                  <li className="nav__li">
                    <NavLink
                      to="/"
                      style={({ isActive }) => (isActive ? activeStyle : null)}
                    >
                      {t("navbar_home")}
                    </NavLink>
                  </li>
                  <li className="nav__li">
                    <NavLink
                      to="/about"
                      style={({ isActive }) => (isActive ? activeStyle : null)}
                    >
                      {t("navbar_about_us")}
                    </NavLink>
                  </li>
                  <li className="nav__li">
                    <NavLink
                      to="/serveces"
                      style={({ isActive }) => (isActive ? activeStyle : null)}
                    >
                      {t("navbar_service")}
                    </NavLink>
                  </li>
                  <li className="nav__li">
                    <NavLink
                      to="/toplam"
                      style={({ isActive }) => (isActive ? activeStyle : null)}
                    >
                      {t("navbar_portfolio")}
                    </NavLink>
                  </li>
                  <li className="nav__li">
                    <NavLink
                      to="/vacansy"
                      style={({ isActive }) => (isActive ? activeStyle : null)}
                    >
                      {t("navbar_vacanse")}
                    </NavLink>
                  </li>
                  <li className="nav__li">
                    <NavLink
                      to="/contact"
                      style={({ isActive }) => (isActive ? activeStyle : null)}
                    >
                      {t("navbar_contact")}
                    </NavLink>
                  </li>
                </ul>
              </nav>

              {openSearch ? (
                <div className="hidden__search__icon">
                  <Input search placeholder="So’z kiriting.." />
                  <i
                    className="icon icon-search icon-middle"
                    onClick={closeSearchFunc}
                  />
                </div>
              ) : (
                <div className="search__icon" onClick={openSearchFunc}>
                  <i className="icon icon-search icon-middle " />
                </div>
              )}
            </div>

            <div className="menu__bar" onClick={openNavbar}>
              <i className="icon icon-menu-bar" />
            </div>
          </div>
        </div>
      </div>
    </StyledNavbar>
  );
}

const StyledNavbar = styled.div`
  position: relative;

  /* Modal Navbar */
  .modal__nav {
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 999999;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(10px);
    color: var(--light);
    padding: 40px 15px 0 15px;
    &.active__modal {
      animation: activetet 0.1s ease;
    }

    @keyframes activetet {
      0% {
        top: -700px;
      }
      100% {
        top: 0;
      }
    }

    .logo__close {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .icon-close {
        background-color: var(--light);
        width: 17px;
        height: 17px;
      }
    }

    .modal__flex {
      display: flex;
      align-items: center;
      flex-direction: column;
      ul {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 30px;
        margin-top: 70px;
        li {
          font-size: 20px;
          font-weight: 600;
          line-height: 26px;
          letter-spacing: -0.02em;
          cursor: pointer;
        }
      }
      .modal__social {
        display: flex;
        align-items: center;
        gap: 40px;
        margin: 75px 0 40px 0;
        i {
          background-color: var(--light);

          &:hover {
            transform: scale(1.2);
          }
        }
      }

      .modal__language {
        display: flex;
        align-items: center;
        gap: 20px;
        font-size: 20px;
        font-weight: 600;
        line-height: 27px;
        letter-spacing: 0em;
        cursor: pointer;
        &__item {
          color: #787a77;
          &.change__modal__color {
            color: var(--light);
          }
        }
      }
    }
  }

  /* Modal Navbar */

  .simple {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 121;
    transition: 0.5s linear;

    &.fixed {
      background: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(25px);
      animation: fixed 0.7s;

      @keyframes fixed {
        from {
          top: -100px;
        }
        to {
          top: 0;
        }
      }
    }

    .navbar {
      padding: 20px 0;
      height: 82px;
      display: flex;
      align-items: center;
      .logo {
        margin-right: 49px;
      }

      .language {
        display: flex;
        align-items: center;
        gap: 6px;
        margin-right: 104px;
        cursor: pointer;
        .language_item {
          color: #787a77;
          &.change_color {
            color: var(--light);
          }
        }
      }

      .nav {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .nav__list {
          margin-right: 22px;
          .nav__ul {
            display: flex;
            align-items: center;
            gap: 36px;
            .nav__li {
              padding: 13px 0;
              a {
                white-space: nowrap;
                color: var(--dark);
                font-size: 16px;
                font-weight: 400;
                line-height: 22px;
                letter-spacing: 0em;
                color: var(--light);
                padding: 0 0 7px 0;
              }
            }
          }
        }
        /* Search icon */
        .search__icon {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 13px 13px 13px 21px;
          .icon-search {
            background-color: var(--light);
          }
        }
        .hidden__search__icon {
          position: relative;
          pad: 15px 0;
          & > .icon-search {
            position: absolute;
            right: 5%;
            top: 50%;
            transform: translateY(-50%);
            background-color: var(--light);
          }
        }

        /* End Serach icon */
      }

      .menu__bar {
        display: none;
      }
    }
  }

  @media (max-width: 1400px) {
    .simple {
      .navbar {
        justify-content: space-between;
        .language {
          display: none;
        }

        .nav {
          width: initial;
          display: none;
          .nav__list {
          }
        }
        .menu__bar {
          display: block;
          cursor: pointer;
          i {
            background-color: var(--light);
          }
        }
      }
    }
  }
`;
