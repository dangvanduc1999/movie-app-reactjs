import React, { Suspense, lazy } from "react";

import SliderSection from "./section1/SliderSection";
import LiveArea from "./section2/LiveArea";
import TrendMovie from "./section3/TrendMovie";
// import Suggested from "./section4/Suggested";
// import Topfilm from "./section5/Topfilm.js";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
const Suggested = lazy(() => import("./section4/Suggested"));
const Topfilm = lazy(() => import("./section5/Topfilm.js"));
function Home() {
  return (
    <>
      <div>
        <SliderSection />
        <LiveArea />
        <TrendMovie />
        <Suspense fallback={<div>Loading</div>}>
          <Suggested />
          <Topfilm />
        </Suspense>
      </div>
    </>
  );
}

export default Home;
