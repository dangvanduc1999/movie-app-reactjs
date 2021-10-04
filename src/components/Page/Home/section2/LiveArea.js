import React from "react";
import Live from "asset/image/live_img.png";
import CountUp from "react-countup";
import "./LiveArea.scss";

const LiveArea = React.forwardRef((props, ref) => {
  return (
    <>
      <section className="home__live-area panel " ref={ref}>
        <div className="grid wide">
          <div className="row home__live-area-wrapper no-gutters">
            <div className="col l-5 m-12 c-12 home__live-content-left">
              <span className="home__live-sub-title">online streaming</span>
              <h2 className="home__live-title">
                live movie & Tv shows for friends & Family
              </h2>
              <div className="home__live-content">
                <p>
                  Lorem ipsum dolor sit amet, consecetur adipiscing elseddo
                  eiusmod There are many variations of passages of lorem Ipsum
                  available, but the majority have suffered alteration.
                </p>
                <div className="live-fact-wrap">
                  <div className="resolution">
                    <h2>hd 4k</h2>
                  </div>
                  <div className="active__customer">
                    <h4>
                      <CountUp start={0} end={20} duration={2.75} /> K+
                    </h4>
                    <p>active customer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col l-7 m-12 c-12" id="col-img">
              <div className="home__live-movie-image">
                <img src={Live} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export default LiveArea;
