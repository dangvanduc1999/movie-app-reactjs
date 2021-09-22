import React, { useEffect, useContext, useCallback } from "react";
import { MovieContext } from "../../../../context/Context";
import Button from "../../../buttton/Button";
import { useStateIfMounted } from "use-state-if-mounted";

import "./Slide1.scss";
import { CHANGE_PLAY, GET_CURRENT_MOVIE } from "../../../../Reducer/type";

function Slide1({ props }) {
  const { dispatch } = useContext(MovieContext);
  const [background, setBackground] = useStateIfMounted(false);
  const { overview, title, backdrop_path, poster_path } = props;

  const activePlay = () => {
    dispatch({
      type: CHANGE_PLAY,
    });
    dispatch({
      type: GET_CURRENT_MOVIE,
      payload: props,
    });
  };
  const handleBackground = useCallback(() => {
    if (window.innerWidth <= 739) {
      setBackground(true);
    }
  }, [setBackground]);
  const handleHeight = useCallback(() => {
    if (window.innerHeight < 610) {
      setBackground(false);
    }
  }, [setBackground]);

  useEffect(() => {
    handleBackground();
    handleHeight();
  }, [handleBackground, handleHeight]);
  window.addEventListener("resize", handleBackground);
  window.addEventListener("resize", handleHeight);
  const backgroundStyle = {
    backgroundImage: background
      ? `url(${poster_path})`
      : `url(${backdrop_path})`,
  };
  return (
    <>
      <div className="wrapper">
        <div className="container-main" style={backgroundStyle}>
          <div className="grid wide">
            <div className="row">
              <div className="col l-12 m-12 c-12">
                <div className="main  ">
                  <div className="main__infor">
                    <div className="main__tag">
                      <i className="fab logo-icon fa-typo3"></i>
                      <p className="logo-tag">TopMovie</p>
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
