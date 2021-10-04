import React, { useState, useEffect, useContext, useCallback } from "react";
import Button from "components/buttton/Button";
import { useStateIfMounted } from "use-state-if-mounted";
import { CHANGE_PLAY, GET_CURRENT_MOVIE } from "Reducer/type";
import { MovieContext } from "context/Context";
import "./Slide1.scss";
import { changeAnotherRange } from "ulities/ChangeRange";
import StarRatings from "react-star-ratings";
import { getCast } from "context/FetchApi";
function Slide1({ props }) {
  const { dispatch } = useContext(MovieContext);
  const [cast, setCast] = useState(null);
  const [starStyle, setStarStyle] = useState({
    starDimension: "24px",
    starSpacing: "4.5px"
  });
  const [background, setBackground] = useStateIfMounted(false);
  const { overview, title, backdrop_path, poster_path, id, vote_average } =
    props;

  const activePlay = () => {
    dispatch({
      type: CHANGE_PLAY
    });
    dispatch({
      type: GET_CURRENT_MOVIE,
      payload: props
    });
  };
  const handleBackground = useCallback(() => {
    if (window.innerWidth <= 600) {
      setBackground(true);
    } else {
      setBackground(false);
    }
  }, [setBackground]);
  const changeRateScore = changeAnotherRange(vote_average, 0, 10, 0, 5);
  const handleStarStyle = () => {
    if (window.innerWidth >= 1024) {
      setStarStyle({
        starDimension: "24px",
        starSpacing: "4.5px"
      });
    } else if (window.innerWidth <= 600) {
      setStarStyle({
        starDimension: "16px",
        starSpacing: "3.5px"
      });
    } else if (window.innerWidth <= 400) {
      setStarStyle({
        starDimension: "13px",
        starSpacing: "2.8px"
      });
    }
  };
  useEffect(() => {
    handleBackground();
    handleStarStyle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    try {
      getCast(id).then((cast) => {
        cast.cast && setCast(cast.cast);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);
  window.addEventListener("resize", () => {
    handleBackground();
    handleStarStyle();
  });
  const actor = cast && cast.splice(0, 3);

  return (
    <>
      <div className="wrapper">
        <div
          className="container-main"
          style={
            background
              ? { backgroundImage: `url(${poster_path})` }
              : { backgroundImage: `url(${backdrop_path})` }
          }
        >
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
                    <StarRatings
                      starRatedColor="#f9ca24"
                      numberOfStars={5}
                      name="rating"
                      rating={changeRateScore}
                      starDimension={starStyle.starDimension}
                      starSpacing={starStyle.starSpacing}
                      // ignoreInlineStyles={true}
                    />
                    <span className="main-point">{changeRateScore}(imbds)</span>
                    <span className="gp">GP</span>
                    <span className=" hours">2h:15mins</span>
                    <p className="main__describer">{overview}</p>
                    <p className="text-primary">
                      Starring:{" "}
                      {actor &&
                        actor.map((a) => <span key={a.id}>{a.name}, </span>)}
                    </p>
                    <p className="text-primary">
                      Gender: <span>action</span>
                    </p>
                    <p className="text-primary">
                      Tags: <span>action, adventure</span>
                    </p>
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
