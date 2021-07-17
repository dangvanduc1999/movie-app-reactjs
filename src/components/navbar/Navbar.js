import React, { useState, useEffect, useContext } from "react";
import { MovieContext } from "../../context/Context";
import { AuthenContext } from "../../context/authencontext";
import { AnimationContext } from "../../context/AnimationContext";
import Button from "../buttton/Button";
import "./Navbar.scss";

import { Link } from "react-router-dom";

const NavBar = () => {
  // loading context
  const { getQueryString } = useContext(MovieContext);
  const { islogin, handleLogin } = useContext(AuthenContext);
  const { getHeader } = useContext(AnimationContext);

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [nav, setNav] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const handleChange = (e) => {
    if (e.keyCode === 13) {
      getQueryString(e.target.value);
      e.target.value = "";
    }
  };
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  const changeBackground = () => {
    if (window.scrollY >= 30) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);
  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <header
        className={nav ? "navBar__container active" : "navBar__container"}
        ref={getHeader}
      >
        <div className="grid wide  ">
          <div className="row no-gutters ">
            <div className="col l-12 m-12 c-12">
              <div className={nav ? "navBar active" : "navBar"}>
                <Link to="/" className="navBar__logo" onClick={closeMobileMenu}>
                  <p>TopMovie</p>
                  <i className="fab navBar__logo-icon fa-typo3"></i>
                </Link>
                <div
                  className={nav ? "menu-icon" : "menu-icon active"}
                  onClick={handleClick}
                >
                  <i className={click ? "fas fa-times" : "fas fa-bars"} />
                </div>
                <div className="navBar__menu">
                  <ul
                    className={click ? "navBar__list active" : "navBar__list"}
                  >
                    <li className="navBar__item">
                      <Link
                        to="/favorite"
                        className={nav ? "navBar__link active" : "navBar__link"}
                        onClick={closeMobileMenu}
                      >
                        Favorite
                      </Link>
                    </li>
                    <li className="navBar__item">
                      <Link
                        to="/listmovie"
                        className={nav ? "navBar__link active" : "navBar__link"}
                        onClick={closeMobileMenu}
                      >
                        List movie
                      </Link>
                    </li>
                    <li className="navBar__item">
                      <Link
                        to="/signin"
                        className="nav-links-mobile"
                        onClick={() => {
                          handleLogin();
                          closeMobileMenu();
                        }}
                      >
                        {islogin ? "LOG OUT" : "SIGN IN/UP"}
                      </Link>
                    </li>
                  </ul>
                  <div className="navBar__search">
                    <Link to="/yourserach">
                      <div className="search-box">
                        <input
                          type="text"
                          name="text"
                          className="search-txt"
                          placeholder="Search..."
                          onKeyUp={handleChange}
                        />
                        <div className="search-btn">
                          <i className="far fa-search" />
                        </div>
                      </div>
                      <input
                        className="navBar__search-input"
                        type="text"
                        placeholder="Search your movie"
                        onKeyUp={handleChange}
                      />
                    </Link>
                  </div>
                  {button && (
                    <Link to="/signin" className="button-link">
                      <Button
                        buttonStyle="btn--outline"
                        buttonSize="btn--medium"
                        text={islogin ? "LOG OUT" : "SIGN IN"}
                        onclick={() => {
                          handleLogin();
                        }}
                      />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default NavBar;
