import React ,{useState, useEffect}from 'react'
import "./Scrolltotop.scss"

function Scrolltotop() {
   const [show, setShow] =useState(false);

   function handleToTop () {
      window.scrollTo({
         behavior:"smooth",
         top:0,
         left:0
      })
   }

   useEffect(() => {
      window.onscroll=()=>{
         if(window.scrollY > 80) {
            setShow(true)
         } else{
            setShow(false)
         }
      }
   }, [])

   return (
      <>{
         show ?
      (<button className="toTop__btn" onClick={handleToTop}>
      <i className="fas fa-arrow-to-top icon"></i>
      </button>) : <></>
      }
      </>
   )
}

export default Scrolltotop
