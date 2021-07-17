import React, { useState, useEffect, useContext } from "react";
import { MovieInforContext } from "../../../../context/MovieinforContext";
import Button from "../../../buttton/Button";

import "./Slide1.scss";

function Slide1({ props }) {
  const { getPlay, getMovie } = useContext(MovieInforContext);

  const [background, setBackground] = useState(false);

  const { overview, title, backdrop_path, poster_path } = props;

  const activePlay = () => {
    getPlay();
    getMovie(props);
  };
  const handleBackground = () => {
    if (window.innerWidth <= 739) {
      setBackground(true);
    } else {
      setBackground(false);
    }
  };
  const handleHeight = () => {
    if (window.innerHeight < 610) {
      setBackground(false);
    }
  };

  useEffect(() => {
    handleBackground();
    handleHeight();
  }, []);
  window.addEventListener("resize", handleBackground);
  window.addEventListener("resize", handleHeight);
  return (
    <>
      <div className="wrapper">
        <div className="container-main">
          <img src={background ? poster_path : backdrop_path} alt="" />
          <div className="grid wide">
            <div className="row">
              <div className="col l-12 m-12 c-12">
                <div className="main  ">
                  <div className="main__infor">
                    <div className="main__tag">
                      <i className="fab navBar__logo-icon fa-typo3"></i>
                      <p>TopMovie</p>
                    </div>
                    <h1 className="main__tittle">{title}</h1>
                    <p className="main__describer">{overview}</p>
                    <div className="main__btn">
                      <Button
                        buttonStyle="btn--outline"
                        buttonSize="btn--medium"
                        text="PLAY"
                        onclick={activePlay}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slide1;
