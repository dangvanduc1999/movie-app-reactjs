import React, { useContext, useState, useEffect } from "react";
import { MovieContext } from "../../context/Context";
import { MovieInforContext } from "../../context/MovieinforContext";
import Slide2 from "../Movie/Slide2";
import MovieInfor from "../Movie/MovieInfor/MovieInfor";
import "./Search.scss";
import Loading from "../loading/Loading";

function Search() {
  // loading data context
  const { data, query } = useContext(MovieContext);
  const { currentMovie, play } = useContext(MovieInforContext);

  const [loading, setLoading] = useState(false);
  //loading before show result of searching moive
  useEffect(() => {
    if (query.length > 0) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  }, [query]);
  let formatDataSearch = data.filter((movie) => movie.type === query);
  return (
    <>
      {" "}
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="search__container">
            <div className="search__list">
              <div className=" grid wide">
                <div className="row">
                  {formatDataSearch.map((movie, index) => {
                    return (
                      <div className="search__item col l-2 m-3 c-6">
                        <Slide2 key={index} props={movie} isChangeSize={true} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          {play ? <MovieInfor props={currentMovie} /> : <> </>}
        </>
      )}
    </>
  );
}

export default React.memo(Search);
