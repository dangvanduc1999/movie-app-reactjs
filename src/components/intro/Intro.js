import React, { useRef, useEffect } from "react";
import "./Intro.scss";
import { TimelineLite, Power3 } from "gsap";

function Intro() {
  let Text = useRef(null);
  let Slider = useRef(null);
  let Intro = useRef(null);

  let vw = window.innerWidth;
  let tl = new TimelineLite();
  // animation for intro
  useEffect(() => {
    let centerText = Text.children[0].clientWidth;
    let LeftText = Text.children[0].offsetLeft;
    let centerAnimate = vw / 2 - centerText / 2 - LeftText;

    tl.fromTo(
      Text.children[0],
      { x: centerAnimate, opacity: 0, scale: 0 },
      {
        opacity: 1,
        scale: 2,
        duration: 1,
        ease: Power3.easeOut,
        stagger: 0.25
      }
    )
      .to(Text.children[0], {
        x: 0,
        scale: 1,
        duration: 1,
        ease: Power3.easeOut
      })
      .from(
        Text.children[1],
        {
          x: -50,
          opacity: 0,
          ease: Power3.easeOut,
          duration: 1.2
        },
        "-=0.5"
      )
      .from(
        Text.children[2],
        {
          x: -80,
          opacity: 0,
          ease: Power3.easeOut,
          duration: 1.2
        },
        "-=0.8"
      )
      .from(
        Text.children[3],
        {
          x: -100,
          opacity: 0,
          ease: Power3.easeOut,
          duration: 1.2
        },
        "-=1"
      )
      .from(
        Text.children[4],
        {
          x: -110,
          opacity: 0,
          ease: Power3.easeOut,
          duration: 1.2
        },
        "-=1"
      )
      .from(
        Text.children[5],
        {
          x: -120,
          opacity: 0,
          ease: Power3.easeOut,
          duration: 1.2
        },
        "-=1"
      )
      .from(
        Text.children[6],
        {
          x: -130,
          opacity: 0,
          ease: Power3.easeOut,
          duration: 1.2
        },
        "-=1"
      )
      .from(
        Text.children[7],
        {
          x: -140,
          opacity: 0,
          ease: Power3.easeOut,
          duration: 1.2
        },
        "-=1"
      )
      .from(
        Text.children[8],
        {
          x: -150,
          opacity: 0,
          ease: Power3.easeOut,

          duration: 1.2
        },
        "-=1"
      )
      .to(Slider, { y: "-100%", duration: 1.5, delay: 0.3 })
      .to(Intro, { y: "-100%", duration: 1 }, "-=1.5");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vw]);
  return (
    <>
      <section
        className="intro"
        ref={(el) => {
          Intro = el;
        }}
      >
        <div
          className="intro-content"
          ref={(el) => {
            Text = el;
          }}
        >
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
        <div
          className="intro-slider"
          ref={(el) => {
            Slider = el;
          }}
        ></div>
      </section>
    </>
  );
}

export default Intro;
