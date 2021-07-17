import React, { useContext } from "react";
import { AnimationContext } from "../../context/AnimationContext";

import "./Intro.scss";
function Intro() {
  const { getText, getSlider, getIntro } = useContext(AnimationContext);

  return (
    <>
      <section className="intro" ref={getIntro}>
        <div className="intro-content" ref={getText}>
          <div className="text">
            <p>T</p>
          </div>
          <div className="text">
            <p>O</p>
          </div>
          <div className="text">
            <p>P</p>
          </div>
          <div className="text">
            <p>M</p>
          </div>
          <div className="text">
            <p>O</p>
          </div>
          <div className="text">
            <p>V</p>
          </div>
          <div className="text">
            <p>I</p>
          </div>
          <div className="text">
            <p>E</p>
          </div>
        </div>
        <div className="intro-slider" ref={getSlider}></div>
      </section>
    </>
  );
}

export default Intro;
