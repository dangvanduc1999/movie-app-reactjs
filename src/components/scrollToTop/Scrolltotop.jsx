import React ,{useState, useEffect}from 'react'
import "./Scrolltotop.scss"

function Scrolltotop() {
   const [show, setShow] =useState(false);

   function handleToTop () {
      window.scrollTo({
         top:0,
         // left:0,
         behavior:"smooth",
      })
   }

   useEffect(() => {
      const toggleVisibility = () => {
         if (window.pageYOffset > 80) {
           setShow(true);
         } else {
           setShow(false);
         }
       };

       window.addEventListener("scroll", toggleVisibility);

       return () => window.removeEventListener("scroll", toggleVisibility);
   }, [])

   return (
      <>{
         show &&
      <button className="toTop__btn" onClick={handleToTop}>
      <i className="fas fa-arrow-to-top icon"></i>
      </button>
      }
      </>
   )
}

export default Scrolltotop
