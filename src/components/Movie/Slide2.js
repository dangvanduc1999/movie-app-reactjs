import React, { useState, useContext, useEffect } from "react";
import { MovieContext } from "../../context/Context";
import { MovieInforContext } from "../../context/MovieinforContext";

import "./Slide2.scss";

const Slide2 = ({ props, isTrue, isChangeSize, margin }) => {
  // loading Context
  const { getFavoriteMovie } = useContext(MovieContext);
  const { getPlay, getMovie } = useContext(MovieInforContext);
  const [active, setActive] = useState(false);
  const [changeSize, setChangeSize] = useState(false);
  let { id, poster_path, isLiked, backdrop_path, title } = props;
  let checkActive =
    isLiked || isTrue || active ? "fas active fa-heart" : "far fa-heart";

  //  handle event and submit data to state
  function activeClick() {
    setActive(!active);
    getFavoriteMovie({ id });
  }
  function activePlay() {
    getPlay();
    getMovie(props);
  }
  function changeSizeImg() {
    let vw = window.innerWidth;
    if (vw < 1299) {
      setChangeSize(true);
    } else {
      setChangeSize(false);
    }
  }
  function handleHeightImg() {
    let vh = window.innerHeight;
    if (vh < 810) {
      setChangeSize(false);
    }
  }
  useEffect(() => {
    changeSizeImg();
    handleHeightImg();
  }, []);
  window.addEventListener("resize", changeSizeImg);
  window.addEventListener("resize", handleHeightImg);

  return (
    <>
      <div className="contaner__slide2-item" style={margin}>
        <div className="slide2__image">
          <img
            src={isChangeSize || changeSize ? poster_path : backdrop_path}
            alt=""
            className="slide2__image-img"
          />
        </div>
        {isChangeSize || changeSize ? (
          <>
            <div className="over__item">
              <div className="over__item-icon">
                <i className="fas fa-play" onClick={activePlay}></i>
              </div>
              <div className="over__item-icon">
                <i className={checkActive} onClick={activeClick}></i>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="slide2__content">
              <h2 className="slide2__title">{title}</h2>
              <p>2hr : 32mins</p>
            </div>
            <div className="over__item-background">
              <div className="over__item-icon">
                <i className="fas fa-play" onClick={activePlay}></i>
              </div>
              <div className="over__item-icon">
                <i className={checkActive} onClick={activeClick}></i>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default React.memo(Slide2);
