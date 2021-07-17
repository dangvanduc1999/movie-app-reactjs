import React, { useEffect, useRef } from "react";
import { TimelineLite, Power3, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const AnimationContext = React.createContext();

function AnimationContextProvider({ children }) {
  // animtion for intro
  let Text = useRef(null);
  let Slider = useRef(null);
  let Intro = useRef(null);
  let Header = useRef(null);

  let getText = (el) => {
    Text = el;
  };
  let getSlider = (el) => {
    Slider = el;
  };
  let getIntro = (el) => {
    Intro = el;
  };
  let getHeader = (el) => {
    Header = el;
  };

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
        stagger: 0.25,
      }
    )
      .to(Text.children[0], {
        x: 0,
        scale: 1,
        duration: 1,
        ease: Power3.easeOut,
      })
      .from(
        Text.children[1],
        {
          x: -50,
          opacity: 0,
          ease: Power3.easeOut,
          duration: 1.2,
        },
        "-=0.5"
      )
      .from(
        Text.children[2],
        {
          x: -80,
          opacity: 0,
          ease: Power3.easeOut,
          duration: 1.2,
        },
        "-=0.8"
      )
      .from(
        Text.children[3],
        {
          x: -100,
          opacity: 0,
          ease: Power3.easeOut,
          duration: 1.2,
        },
        "-=1"
      )
      .from(
        Text.children[4],
        {
          x: -110,
          opacity: 0,
          ease: Power3.easeOut,
          duration: 1.2,
        },
        "-=1"
      )
      .from(
        Text.children[5],
        {
          x: -120,
          opacity: 0,
          ease: Power3.easeOut,
          duration: 1.2,
        },
        "-=1"
      )
      .from(
        Text.children[6],
        {
          x: -130,
          opacity: 0,
          ease: Power3.easeOut,
          duration: 1.2,
        },
        "-=1"
      )
      .from(
        Text.children[7],
        {
          x: -140,
          opacity: 0,
          ease: Power3.easeOut,
          duration: 1.2,
        },
        "-=1"
      )
      .from(
        Text.children[8],
        {
          x: -150,
          opacity: 0,
          ease: Power3.easeOut,

          duration: 1.2,
        },
        "-=1"
      )
      .to(Slider, { y: "-100%", duration: 1.5, delay: 0.3 })
      .to(Intro, { y: "-100%", duration: 1 }, "-=1.5")
      .fromTo(Header, { opacity: 0 }, { opacity: 1, duration: 1 }, "-=0.8");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vw]);
  // animation for home__sitemovie

  const animationData = {
    getText,
    getSlider,
    getIntro,
    getHeader,
  };

  return (
    <AnimationContext.Provider value={animationData}>
      {children}
    </AnimationContext.Provider>
  );
}
export default AnimationContextProvider;
