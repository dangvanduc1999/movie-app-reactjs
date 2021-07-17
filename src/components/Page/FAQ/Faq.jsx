import React,{useState} from 'react'
import "./Faq.scss"
 const datas =[
    {
   quetion:   "  what is streamit",
   anwser: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English."
 },
 {
   quetion:   "  what is streamit",
   anwser: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English."
 },
 {
   quetion:   "  what is streamit",
   anwser: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English."
 },
 {
   quetion:   "  what is streamit",
   anwser: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English."
 },
]
function Faq() {
   const [click , setClick] =useState(false)
   const handleClick = (index) => {
     if (click === index){
        return setClick(null)
     }
     setClick(index)
   }
   return (
      <>
         <section className="Faq">
            <div className="Faq__title">
               <h2>FAQ</h2>
            </div>
            <div className="Faq__content">
               <div className="grid wide">
                  <div className="row">
                     {datas.map((data,index) => {
                        return (
                        <div className="col l-10 l-o-1 m-10 m-o-1 c-10 c-o-1 Faq__QA-container " key ={index} onClick={() => handleClick(index)}>
                           <div className="Faq__QA-wrapper">
                              <div className="Faq__QA-quetion">
                                 <strong className="Faq__QA-quetion-title">
                                    {data.quetion}
                                 </strong>
                                 <button className="Faq__QA-quetion-btn" >
                                    <i className={click === index ? "fas fa-minus":"fas fa-plus"}></i>
                                 </button>
                              </div>
                              <div className={click === index ? "Faq__Qa-answers active" : "Faq__Qa-answers"} >
                                 <p>{data.anwser}</p>
                           </div>
                        </div>
                     </div>
                        )
                     })}
                  </div>
               </div>
            </div>
         </section>
      </>
   )
}

export default Faq
