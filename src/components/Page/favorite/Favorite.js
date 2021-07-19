import React, { useContext, useEffect, useState } from "react";
import Slide2 from "../../Movie/Slide2";
import MovieInfor from "../../Movie/MovieInfor/MovieInfor";
import { Redirect } from "react-router-dom";

import "./Favorite.scss";

import { MovieContext } from "../../../context/Context";
import { MovieInforContext } from "../../../context/MovieinforContext";
import { AuthenContext } from "../../../context/authencontext";

function Favorite(props) {
  // loading contextdata
  const { state } = useContext(MovieContext);
  const { data } = state;
  const { currentMovie, play } = useContext(MovieInforContext);
  const { islogin } = useContext(AuthenContext);
  const [faroviteMovie, setFavoriteMovie] = useState([]);
  useEffect(() => {
    setFavoriteMovie(() => {
      let format = data.filter((likemovie) => likemovie.isLiked === true);
      return format;
    });
  }, [data]);

  if (!islogin) {
    return <Redirect to="/signin" />;
  }
  return (
    <>
      {" "}
      {faroviteMovie.length > 0 ? (
        <>
          <div className="favorite__container">
            <div className="favorite__list">
              <div className=" grid wide">
                <div className="row">
                  {faroviteMovie.map((movie, index) => (
                    <div className="favorite__item col l-3 m-3 c-6">
                      <Slide2 key={index} props={movie} isTrue="true" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {play ? <MovieInfor props={currentMovie} /> : <> </>}
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
