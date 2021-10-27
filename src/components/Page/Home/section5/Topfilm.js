import React, { useState, useEffect, useContext, useMemo, memo } from "react";
import { MovieContext } from "../../../../context/Context";
import Slider from "react-slick";
import Slide2 from "../../../Movie/Slide2";
import "./TopFilm.scss";
function Slider1({ props: { backdrop_path } }) {
  return (
    <>
      <div className="home__topFilm-background">
        <img src={backdrop_path} alt="" />
      </div>
    </>
  );
}

function Topfilm() {
  const { state } = useContext(MovieContext);

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  let slider1 = useMemo(() => [], []);
  let slider2 = useMemo(() => [], []);

  const fomatData = state.data
    .filter((movie) => {
      return (
        movie.type !== state.query &&
        movie.type !== "filter" &&
        movie.vote_count >= 8
      );
    })
    .sort((a, b) => {
      return b.vote_count - a.vote_count;
    });
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    beforeChange: function (currentSlide, nextSlide) {},
    afterChange: function (currentSlide) {}
  };

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, [slider1, slider2]);

  return (
    <>
      <section className="home__topFilm ">
        <div className="grid wide">
          <div className="row no-gutters ">
            <div className="col l-12">
              <h2 className="home__topFilm-title">Top movie </h2>
            </div>
          </div>
          <div className="row no-gutters home__topFilm-container ">
            <Slider
              asNavFor={nav2}
              ref={(slider) => (slider1 = slider)}
              className="home__topFilm-wrapper"
            >
              {fomatData.map(function (movie, index) {
                return (
                  <div key={index}>
                    <Slider1 key={movie.id} props={movie} />;
                  </div>
                );
              })}
            </Slider>
            <div className="home__topFilm-small">
              <Slider
                asNavFor={nav1}
                ref={(slider) => (slider2 = slider)}
                swipeToSlide={true}
                focusOnSelect={true}
                {...settings}
              >
                {fomatData.map(function (movie, index) {
                  return (
                    <div key={index}>
                      <Slide2
                        key={movie.id}
                        props={movie}
                        isChangeSize={false}
                      />
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default memo(Topfilm);
