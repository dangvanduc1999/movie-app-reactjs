import React, { useRef, useEffect } from "react";
import Button from "../../../buttton/Button";
import image1 from "../../../../image/image1.jpg";
import "./TrendMovie.scss";
import { TimelineLite, Power3, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function TrendMovie() {
  let HomeSiteContent = useRef(null);
  let HomeSiteImg = useRef(null);
  useEffect(() => {
    let tl1 = new TimelineLite({
      scrollTrigger: {
        trigger: HomeSiteContent,
        start: "top 80%",
        end: "top 50%",
      },
    });
    tl1
      .from(
        [
          HomeSiteContent.children[0],
          HomeSiteContent.children[1],
          HomeSiteContent.children[2],
          HomeSiteContent.children[3],
          HomeSiteContent.children[4],
        ],
        {
          opacity: 0,
          duration: 1.2,
          y: 100,
          stagger: 0.1,
        },
        "start"
      )
      .from(
        HomeSiteContent.children[5],
        { opacity: 0, duration: 1, delay: 0.8 },
        "-=1"
      )
      .from(
        HomeSiteImg,
        { y: 100, opacity: 0, duration: 1, ease: Power3.easeOut },
        "start"
      )
      .from(
        HomeSiteImg.children,
        {
          scale: 1.4,
          duration: 1,
          ease: Power3.easeOut,
        },
        "-=1"
      );
  }, []);

  return (
    <>
      <section className="home__siteMovie ">
        <div className="grid wide ">
          <div className="row no-gutters">
            <div
              className="col l-6 m-12 c-12 home__siteMovie-content"
              ref={(el) => (HomeSiteContent = el)}
            >
              <h2 className="home__siteMovie-tittle">bailey</h2>
              <span>4.2(imdb)</span>
              <div className="home__siteMovie-tagPoint">
                <span className="home__siteMovie-tag">15+</span>{" "}
                <p>2hr:30mins</p>
              </div>
              <h3>movie of the years</h3>
              <p className="home__siteMovie-describer">
                Baileys Irish Cream is an Irish cream liqueur an alcoholic
                beverage flavoured with cream, cocoa, and Irish whiskey made by
                Diageo at Republic of Ireland and in Mallusk, Northern Ireland.
              </p>
              <Button
                text="PLAY"
                buttonSize="btn--medium"
                buttonStyle="btn--primary"
              />
            </div>
            <div className="col l-6 home__siteMovie-imgcontainer ">
              <div className="home__siteMovie-imgWrap">
                <div
                  className="home__siteMovie-img"
                  ref={(el) => (HomeSiteImg = el)}
                  // eslint-disable-next-line jsx-a11y/img-redundant-alt
                >
                  <img src={image1} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TrendMovie;
