import React, { useContext, useEffect, useState, useRef } from "react";
import Slide2 from "../../Movie/Slide2";
import MovieInfor from "../../Movie/MovieInfor/MovieInfor";
import { Redirect } from "react-router-dom";
import { MovieContext } from "../../../context/Context";
import { AuthenContext } from "../../../context/authencontext";
import "./Favorite.scss";

function Favorite(props) {
  // loading contextdata
  const { state } = useContext(MovieContext);
  const { data } = state;
  const { islogin } = useContext(AuthenContext);
  const favoriteRef = useRef(null);
  const [faroviteMovie, setFavoriteMovie] = useState([]);
  useEffect(() => {
    let fmtdata = data.filter((likemovie) => likemovie.isLiked === true);
    setFavoriteMovie(fmtdata);
  }, [data]);
  if (!islogin) {
    return <Redirect to="/signin" />;
  }
  return (
    <>
      {" "}
      {faroviteMovie.length > 0 ? (
        <>
          <div className="favorite__container" ref={favoriteRef}>
            <div className="favorite__list">
              <div className=" grid wide">
                <div className="row">
                  {faroviteMovie.map((movie, index) => (
                    <div
                      key={index}
                      className=" favorite__item col l-3 m-3 c-6"
                    >
                      <Slide2 props={movie} isTrue="true" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {state.play ? <MovieInfor props={state.currentMovie} /> : <> </>}
        </>
      ) : (
        <div className="favorite__container">
          {/* <div className="favorite__list"> */}
          <div className=" grid wide">
            <div className="row no-gutters ">
              <p className=" favorite__noitem col l-12 m-12 c-12">
                {" "}
                there is nothing in your favorite movie{" "}
              </p>
            </div>
          </div>
          {/* </div> */}
        </div>
      )}
    </>
  );
}

export default Favorite;
