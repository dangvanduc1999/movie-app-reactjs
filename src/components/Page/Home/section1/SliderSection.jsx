import React, { useContext } from "react";
import { MovieContext } from "../../../../context/Context";
import Slider from "react-slick";
import Slide1 from "../slide1/Slide1";
// import { setting2 } from "./setting";
import MovieInfor from "../../../Movie/MovieInfor/MovieInfor";
import { formatData } from "ulities/filter";
import "./SliderSection1.scss";
// import StarRatings from " react-star-ratings";
const SliderSection = React.forwardRef((props, ref) => {
  const { state } = useContext(MovieContext);
  const { checkButton, prev } = props;
  const data = formatData(
    state.data,
    { type: "filter", payload: "home" },
    "type"
  ).splice(0, 10);

  function SampleNextArrow(props) {
    const { className, onClick, currentSlide } = props;
    return (
      <div
        className={className}
        onClick={() => {
          onClick();
          checkButton(currentSlide);
        }}
      />
    );
  }
  function SamplePrevArrow(props) {
    const { className, onClick, currentSlide } = props;
    return (
      <div
        className={className}
        onClick={() => {
          onClick();
          prev(currentSlide);
        }}
      />
    );
  }

  const setting2 = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow className="ghensjdna" />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => <div className="custom-dots"></div>,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: null,
          prevArrow: null
        }
      }
    ]
  };

  return (
    <section className="home__topmovie panel " ref={ref}>
      <Slider {...setting2} className="home__wrapper">
        {data.map(function (data, index) {
          return <Slide1 key={index} props={data} />;
        })}
      </Slider>

      {state.play ? <MovieInfor props={state.currentMovie} /> : <></>}
    </section>
  );
});

export default React.memo(SliderSection);
