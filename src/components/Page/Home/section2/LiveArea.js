import React, { useRef, useEffect } from "react";
import Button from "../../../buttton/Button";
import Live from "../../../../image/live_img.png";
import CountUp from "react-countup";
import "./LiveArea.scss";

import { TweenMax, TimelineLite, Power3, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function LiveArea() {
  let HomeLive = useRef(null);
  let image = useRef(null);
  let content = useRef(null);

  useEffect(() => {
    const subTitle = content.children[0];
    const Title = content.children[1];
    const ContentP = content.children[2].children[0];
    const Resolution = content.children[2].children[1].children[0];
    const activeCustomer = content.children[2].children[1].children[1];
    const BTN = content.children[2].children[2];

    let tl = new TimelineLite({
      scrollTrigger: {
        trigger: [
          subTitle,
          Title,
          ContentP,
          Resolution.children,
          activeCustomer.children,
          BTN,
          image,
          image.children,
        ],
        start: "top 50%",
        end: "top 30%",
        toggleActions: "play none none  none",
        // invalidateOnRefresh: true,
      },
    });

    TweenMax.to(HomeLive, 0, { css: { visibility: "visible" } });

    tl.from(
      image,
      1.2,
      { y: 1000, opacity: 0, ease: Power3.easeOut },
      "start"
    ).from(
      image.firstElementChild,
      2,
      { scale: 1.4, ease: Power3.easeOut },
      0.2
    );

    tl.staggerFrom(
      subTitle,
      1,
      { y: 44, opacity: 0, ease: Power3.easeOut, delay: 0.8 },
      0.15,
      "start"
    )
      .from(
        Title,
        1,
        { y: 44, opacity: 0, ease: Power3.easeOut, delay: 0.8 },
        0.15,
        "start"
      )
      .from(ContentP, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.2)
      .from(
        Resolution.children,
        { y: 20, opacity: 0, ease: Power3.easeOut },
        1.4
      )
      .from(
        activeCustomer.children,
        { y: 20, opacity: 0, ease: Power3.easeOut },
        1.6
      )
      .from(BTN, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.8);
  }, []);

  return (
    <>
      <section
        className="home__live-area panel "
        ref={(el) => {
          HomeLive = el;
        }}
      >
        <div className="grid wide">
          <div className="row home__live-area-wrapper no-gutters">
            <div
              className="col l-5 m-12 c-12 home__live-content-left"
              ref={(el) => {
                content = el;
              }}
            >
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
                <Button
                  text="WATCH NOW"
                  buttonSize="btn--large"
                  buttonStyle="btn--primary"
                />
              </div>
            </div>
            <div className="col l-7 m-12 c-12" id="col-img">
              <div
                className="home__live-movie-image"
                ref={(el) => {
                  image = el;
                }}
              >
                <img src={Live} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LiveArea;
