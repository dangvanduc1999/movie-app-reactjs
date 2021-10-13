import React, { useState, useContext, useEffect } from "react";
import { useStateIfMounted } from "use-state-if-mounted";
import { MovieContext } from "../../context/Context";
import {
  CHANGE_PLAY,
  GET_CURRENT_MOVIE,
  GET_ID_LIKES
} from "../../Reducer/type";
import { AuthenContext } from "context/authencontext";
import "./Slide2.scss";
import { postMovieFavorite } from "context/FetchApi";

const Slide2 = ({ props, isTrue, isChangeSize, margin }) => {
  // loading Context
  const { dispatch } = useContext(MovieContext);
  const { state2, accounIdState } = useContext(AuthenContext);
  const [active, setActive] = useState(false);
  const [changeSize, setChangeSize] = useStateIfMounted(false);
  let { poster_path, isLiked, backdrop_path, title } = props;
  let checkActive =
    isLiked || isTrue || active ? "fas active fa-heart" : "far fa-heart";
  if (poster_path.includes("null")) {
    poster_path = `https://images.unsplash.com/photo-1526500627444-4ae11809ad24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=435&q=80`;
  }
  function activeClick() {
    setActive(!active);
    dispatch({ type: GET_ID_LIKES, payload: props.id });

    postMovieFavorite({
      accountId: accounIdState.data[0].id,
      sessionId: state2.data[0],
      request_body: {
        media_type: "movie",
        media_id: props.id,
        favorite: true
      }
    });
  }
  function activePlay() {
    dispatch({
      type: CHANGE_PLAY
    });
    dispatch({
      type: GET_CURRENT_MOVIE,
      payload: props
    });
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
