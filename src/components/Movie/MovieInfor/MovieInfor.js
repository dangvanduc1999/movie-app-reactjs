import React, { useContext, useState, useEffect } from "react";
import { MovieInforContext } from "../../../context/MovieinforContext";
import { Link, useRouteMatch } from "react-router-dom";
import Button from "../../buttton/Button";
import "./MovieInfor.scss";

function MovieInfor({ props }) {
  // destructuring props
  let { id, poster_path, isLiked, backdrop_path, title, ...rest } = props;

  // loading context

  const { getPlay } = useContext(MovieInforContext);
  const [background, setBackground] = useState([]);

  let { url } = useRouteMatch();
  let fommatURL = url === "/" ? "/Home" : url;
  function activePlay() {
    getPlay();
  }
  const handleBackground = () => {
    if (window.innerWidth <= 739) {
      setBackground(true);
    } else {
      setBackground(false);
    }
  };
  useEffect(() => {
    handleBackground();
  }, []);

  return (
    <>
      <div className="modal" onClick={activePlay}>
        <div className="modal-layout"></div>
        <div className="movie-infor__container">
          <div className="movie__poster">
            <img src={background ? poster_path : backdrop_path} alt="" />
            <i
              className="fad fa-arrow-left movie__poster-icon"
              onClick={activePlay}
            ></i>
          </div>
          <div className="movie__detail">
            <div className="movie__detail-primary">
              <h2>{title}</h2>
              <div className="movie__detail-btn">
                <Link
                  to={{
                    pathname: `${fommatURL}/${title}`,
                    state: { ...props },
                  }}
                >
                  <Button
                    text="WATCH"
                    buttonStyle="btn--primary"
                    buttonSize="btn--medium"
                  />

                  <Button
                    text="TRAILER"
                    buttonStyle="btn--outline"
                    buttonSize="btn--medium"
                  />
                </Link>
              </div>
            </div>
            <div className="movie__detail-secondary">
              <div className="movie__detail-secondary-overview">
                <p>{rest.overview}</p>
              </div>
              <div className="movie__detail-secondary-infor">
                <p>Update: {rest.release_date} </p>
                <p>Average point : {rest.vote_average} </p>
                <p>View: {rest.vote_count}K</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieInfor;
