import React, { useContext } from "react";
import { MovieContext } from "../../../context/Context";
import { MovieInforContext } from "../../../context/MovieinforContext";
import Slide2 from "../../Movie/Slide2";
import Slider from "react-slick";
import MovieInfor from "../../Movie/MovieInfor/MovieInfor";
import { settings } from "./setting";
import "./List.scss";

function List() {
  const { data } = useContext(MovieContext);
  const { currentMovie, play } = useContext(MovieInforContext);
  let homeData = data.filter((data) => data.type === "home");
  let theaterData = data.filter((data) => data.type === "theater");
  let DrammaData = data.filter((data) => data.type === "dramma");

  return (
    <>
      <div className="list__container">
        <div className="grid wide">
          <div className="row no-gutters">
            <div className="list__tittle-wrapper col l-12 m-12 c-12">
              <p className="list__tittle">Top thịnh hành</p>
            </div>
          </div>
          <Slider className=" list__movie " {...settings}>
            {homeData.map(function (movie, index) {
              return (
                <div className="">
                  <Slide2 key={movie.id} props={movie} isChangeSize={true} />
                </div>
              );
            })}
          </Slider>
          <div className="row no-gutters">
            <div className="list__tittle-wrapper col l-12 m-12 c-12">
              <p className="list__tittle">Movie in theater </p>
            </div>
          </div>
          <Slider className=" list__movie " {...settings}>
            {theaterData.map(function (movie, index) {
              return (
                <div className="">
                  <Slide2 key={index} props={movie} isChangeSize={true} />
                </div>
              );
            })}
          </Slider>
          <div className="row no-gutters">
            <div className="list__tittle-wrapper col l-12 m-12 c-12">
              <p className="list__tittle">New Released </p>
            </div>
          </div>
          <Slider className=" list__movie " {...settings}>
            {DrammaData.map(function (movie, index) {
              return (
                <div className="">
                  <Slide2 key={index} props={movie} isChangeSize={true} />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      {play ? <MovieInfor props={currentMovie} /> : <> </>}
    </>
  );
}

export default React.memo(List);
