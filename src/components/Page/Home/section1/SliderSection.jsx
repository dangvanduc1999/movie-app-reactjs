import React, { useContext } from "react";
import { MovieContext } from "../../../../context/Context";
import Slider from "react-slick";
import Slide1 from "../slide1/Slide1";
import { setting2 } from "./setting";
import MovieInfor from "../../../Movie/MovieInfor/MovieInfor";
import { formatData } from "ulities/filter";
import "./SliderSection1.scss";
// import StarRatings from " react-star-ratings";
function SliderSection() {
  const { state } = useContext(MovieContext);

  const data = formatData(
    state.data,
    { type: "filter", payload: "home" },
    "type"
  ).splice(0, 10);

  return (
    <section className="home__topmovie panel ">
      <Slider {...setting2} className="home__wrapper">
        {data.map(function (data, index) {
          return <Slide1 key={index} props={data} />;
        })}
      </Slider>
      {/* <StarRatings
        rating={state.rating}
        starRatedColor="blue"
        numberOfStars={6}
        name="rating"
      /> */}
      {state.play ? <MovieInfor props={state.currentMovie} /> : <></>}
    </section>
  );
}

export default SliderSection;
