import React, { useContext } from "react";
import Slide2 from "../../../Movie/Slide2";
import Slider from "react-slick";
import { MovieContext } from "../../../../context/Context";
import { formatData } from "ulities/filter";
import "./Suggested.scss";
const settings = {
  dots: false,
  infinite: true,
  speed: 800,
  slidesToShow: 4,
  slidesToScroll: 3,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
        autoplay: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        autoplay: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true
      }
    }
  ]
};
function Suggested(props) {
  const { state } = useContext(MovieContext);
  const fmtData = formatData(
    state.data,
    { type: "filter", payload: props.type },
    "type"
  );
  return (
    <>
      <section className="suggest-container">
        <div className="grid wide">
          <div className="row no-gutters">
            <div className="col l-12 m-12 c-12 suggest__header ">
              <h2 className="suggest__title">{props.name}</h2>
            </div>
          </div>
          <Slider {...settings}>
            {fmtData.map((movie) => {
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
