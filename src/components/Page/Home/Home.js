import React from "react";

import SliderSection from "./section1/SliderSection";
import LiveArea from "./section2/LiveArea";
import TrendMovie from "./section3/TrendMovie";
import Suggested from "./section4/Suggested";
import Topfilm from "./section5/Topfilm.js";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function Home() {
  return (
    <>
      <div>
        <SliderSection />
        <LiveArea />
        <TrendMovie />
        <Suggested />
        <Topfilm />
      </div>
    </>
  );
}

export default Home;
