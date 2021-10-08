import React, { useState, useEffect, useContext, memo } from "react";
import { MovieContext } from "../../context/Context";
import { AuthenContext } from "../../context/authencontext";
import Button from "../buttton/Button";
import "./Navbar.scss";

import { Link, useHistory } from "react-router-dom";
import { GET_QUERY } from "../../Reducer/type";
import { getAuthorize } from "context/FetchApi";
import useAsync from "hooks/useAsync";

const NavBar = () => {
  // loading context
  const { dispatch } = useContext(MovieContext);
  const { islogin, handleLogin } = useContext(AuthenContext);
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [nav, setNav] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const history = useHistory();
  const handleChange = (e) => {
    if (e.keyCode === 13) {
      dispatch({
        type: GET_QUERY,
        payload: e.target.value
      });
      e.target.value = "";
      history.push("/yourserach");
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
  const { data } = useAsync(getAuthorize, null, !islogin);
  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);
  window.addEventListener("scroll", changeBackground);
  return (
    <>
      <header
        className={nav ? "navBar__container active" : "navBar__container"}
      >
        <div className="grid wide  ">
          <div className="row">
            <div className="col l-12 m-12 c-12">
              <nav className={nav ? "navBar active" : "navBar"}>
                <Link to="/" className="navBar__logo" onClick={closeMobileMenu}>
                  <p>TopMovie</p>
                  <i className="fab navBar__logo-icon fa-typo3"></i>
                </Link>
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
                        // onMouseEnter={loaded}
                      >
                        List movie
                      </Link>
                    </li>
                    <li className="navBar__item">
                      <a
                        href={
                          islogin
                            ? `https://www.themoviedb.org/authenticate/${data}?redirect_to=${
                                window.location.href + "signin"
                              }`
                            : ""
                        }
                        className="nav-links-mobile"
                        onClick={() => {
                          handleLogin();
                          closeMobileMenu();
                        }}
                      >
                        {islogin ? "LOG OUT" : "SIGN IN/UP"}
                      </a>
                    </li>
                  </ul>
                  <div className="navBar__search">
                    <div to="/yourserach">
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
                    </div>
                  </div>
                  {button && (
                    <a
                      href={
                        islogin
                          ? `https://www.themoviedb.org/authenticate/${data}?redirect_to=${
                              window.location.href + "signin"
                            }`
                          : ""
                      }
                      className="button-link"
                    >
                      <Button
                        buttonStyle="btn--outline"
                        buttonSize="btn--medium"
                        text={islogin ? "LOG OUT" : "SIGN IN"}
                        onclick={() => {
                          handleLogin();
                        }}
                      />
                    </a>
                  )}
                </div>
                <div className="menu-icon" onClick={handleClick}>
                  <i className={click ? "fas fa-times" : "fas fa-bars"} />
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default memo(NavBar);
