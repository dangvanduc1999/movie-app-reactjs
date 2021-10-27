import React, { useRef, useEffect, useState } from "react";

import SliderSection from "./section1/SliderSection";
import LiveArea from "./section2/LiveArea";
import TrendMovie from "./section3/TrendMovie";
import Suggested from "./section4/Suggested";
import Topfilm from "./section5/Topfilm.js";
import { TimelineLite, Power3, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Home() {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const sliderRef = useRef(null);
  const [check, setCheck] = useState(0);
  const handle = (data) => {
    setCheck(() => {
      if (data * 1 - 1 + 2 > 9) return 0;
      return data * 1 - 1 + 2;
    });
  };
  const handlePrev = (data) => {
    setCheck(() => {
      if (data - 1 < 0) return 9;
      return data - 1;
    });
  };
  useEffect(() => {
    if (ref && ref.current) {
      let tl = new TimelineLite({
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          end: "top 50%"
        }
      });
      const content = ref.current.querySelector(".home__live-content-left");
      const image = ref.current.querySelector(".home__live-movie-image");
      const subTitle = content?.children[0];
      const Title = content?.children[1];
      const ContentP = content?.children[2].children[0];
      const Resolution = content?.children[2].children[1].children[0];
      const activeCustomer = content?.children[2].children[1].children[1];

      tl.from(
        image,
        1.2,
        { y: 1000, opacity: 0, ease: Power3.easeOut },
        "start"
      )
        .from(
          image.firstElementChild,
          2,
          { scale: 1.4, ease: Power3.easeOut },
          0.2
        )
        .from(
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
        );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (ref2 && ref2.current) {
      const HomeSiteContent = ref2.current.querySelector(
        ".home__siteMovie-content"
      );
      const HomeSiteImg = ref2.current.querySelector(".home__siteMovie-img");
      let tl1 = new TimelineLite({
        scrollTrigger: {
          trigger: ref2.current,
          start: "top 50%",
          end: "bottom 50%",
          maker: true
        }
      });
      tl1
        .from(
          [
            HomeSiteContent.children[0],
            HomeSiteContent.children[1],
            HomeSiteContent.children[2],
            HomeSiteContent.children[3],
            HomeSiteContent.children[4]
          ],
          {
            opacity: 0,
            duration: 1.2,
            y: 100,
            stagger: 0.1
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
            ease: Power3.easeOut
          },
          "-=1"
        );
    }
  }, []);

  useEffect(() => {
    if (sliderRef && sliderRef.current) {
      const ele = sliderRef.current;
      const slideActive = ele.querySelector(
        ".slick-slide.slick-active.slick-current"
      );

      const imgDemo = slideActive && slideActive.querySelector(".slide__demo");
      const main = slideActive && slideActive.querySelector(".main__infor");
      let tl = new TimelineLite();
      tl.from(
        imgDemo,
        {
          scale: 0,
          duration: 1,
          ease: Power3.easeOut,
          delay: 0.5
        },
        "start"
      ).from(
        slideActive && [
          slideActive && main.children[0],
          slideActive && main.children[1],
          slideActive && main.children[2],
          slideActive && main.children[3],
          slideActive && main.children[4],
          slideActive && main.children[5],
          slideActive && main.children[6],
          slideActive && main.children[7],
          slideActive && main.children[8],
          slideActive && main.children[9],
          slideActive && main.children[10],
          slideActive && main.children[11]
        ],
        {
          opacity: 0,
          duration: 1.2,
          y: 100,
          stagger: 0.1
        },
        "start"
      );
    }
  }, [check]);
  return (
    <>
      <div style={{ overflow: "hidden" }}>
        <SliderSection ref={sliderRef} checkButton={handle} prev={handlePrev} />
        <LiveArea ref={ref} />
        <TrendMovie ref={ref2} />
        <Suggested name={"suggested for you"} />
        <Topfilm />
        {/* </Suspense> */}
      </div>
    </>
  );
}

export default Home;
