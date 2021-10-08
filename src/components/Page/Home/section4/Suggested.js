import React, { useContext } from "react";
import Slide2 from "../../../Movie/Slide2";
import Slider from "react-slick";
import { MovieContext } from "../../../../context/Context";
import "./Suggested.scss";
function Suggested() {
  const { state } = useContext(MovieContext);
  const fomatData = state.data
    .filter((movie) => {
      return movie.vote_average >= 7;
    })
    .sort((a, b) => {
      return b.vote_average - a.vote_average;
    });
  const viewFomatData = fomatData.splice(0, 4);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <section className="suggest-container">
        <div className="grid wide">
          <div className="row no-gutters">
            <div className="col l-12 m-12 c-12 suggest__header ">
              <h2 className="suggest__title">suggested for you</h2>
            </div>
          </div>
          <Slider {...settings}>
            {viewFomatData.map((movie) => {
              return (
                <Slide2
                  key={movie.id}
                  props={movie}
                  isChangeSize={false}
                  margin={{
                    margin: "0 1rem"
                  }}
                />
              );
            })}
          </Slider>
        </div>
      </section>
    </>
  );
}

export default Suggested;
