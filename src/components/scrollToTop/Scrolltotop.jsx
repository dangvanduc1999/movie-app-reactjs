import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import React, { useState } from "react";
import "./Scrolltotop.scss";
gsap.registerPlugin(ScrollToPlugin);
function Scrolltotop() {
  const [show, setShow] = useState(false);
  function handleToTop() {
    gsap.to(window, { duration: 1.5, scrollTo: { y: 0 } });
  }
  const toggleVisibility = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setShow(true);
    } else if (scrolled <= 300) {
      setShow(false);
    }
  };

  window.addEventListener("scroll", toggleVisibility);

  return (
    <>
      {show && (
        <button className="toTop__btn" onClick={handleToTop}>
          <i className="fas fa-arrow-to-top icon"></i>
        </button>
      )}
    </>
  );
}

export default Scrolltotop;
