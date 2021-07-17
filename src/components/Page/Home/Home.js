import React from "react";
import { MovieContextConsumer } from "../../../context/Context";
import { MovieInforConsumer } from "../../../context/MovieinforContext";
import Slide2 from "../../Movie/Slide2";
import Slide1 from "./slide1/Slide1";
import LiveArea from "./section2/LiveArea";
import TrendMovie from "./section3/TrendMovie";
import Suggested from "./section4/Suggested";
import Topfilm from "./section5/Topfilm.js";
import Slider from "react-slick";
import MovieInfor from "../../Movie/MovieInfor/MovieInfor";
import { settings, setting2 } from "./setting";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.scss";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
    this.HomLive = null;
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    return (
      <>
        <MovieContextConsumer>
          {(props) => {
            let formatData = props.data.filter((data) => data.type === "home");
            return (
              <MovieInforConsumer>
                {(props) => {
                  const { currentMovie, play } = props;
                  return (
                    <>
                      {" "}
                      <section className="home__topmovie panel ">
                        {/* big slider  */}
                        <Slider
                          {...setting2}
                          className="home__wrapper"
                          asNavFor={this.state.nav2}
                          ref={(slider) => (this.slider1 = slider)}
                        >
                          {formatData.map(function (data, index) {
                            return <Slide1 key={index} props={data} />;
                          })}
                        </Slider>

                        {/*============= small slider========= */}
                        <div className="home__small-slider-wrapper">
                          <div className="grid wide">
                            <Slider
                              {...settings}
                              asNavFor={this.state.nav1}
                              ref={(slider) => (this.slider2 = slider)}
                              swipeToSlide={true}
                              focusOnSelect={true}
                              className="home__slide-children"
                            >
                              {formatData.map(function (data, index) {
                                return (
                                  <Slide2
                                    key={index}
                                    props={data}
                                    isChangeSize={false}
                                  />
                                );
                              })}
                            </Slider>
                          </div>
                        </div>
                        {play ? <MovieInfor props={currentMovie} /> : <></>}
                      </section>
                      {/* ======another section in page home  */}
                      <LiveArea />
                      <TrendMovie />
                      <Suggested />
                      <Topfilm />
                    </>
                  );
                }}
              </MovieInforConsumer>
            );
          }}
        </MovieContextConsumer>
      </>
    );
  }
}
export default React.memo(Home);
