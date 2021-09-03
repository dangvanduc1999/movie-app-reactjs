import React,{useState, useContext, useMemo, useEffect} from 'react'
import { MovieContext } from '../../../../context/Context';
import Slider from "react-slick";
import Slide1 from '../slide1/Slide1';
import Slide2 from '../../../Movie/Slide2';
import {setting2, settings} from "./setting"
import MovieInfor from '../../../Movie/MovieInfor/MovieInfor';


import "./SliderSection1.scss"
function SliderSection( ) {
   const { state } = useContext(MovieContext);
   const [nav1, setNav1] = useState(null);
   const [nav2, setNav2] = useState(null);

   let slider1 = useMemo(() => [], []);
   let slider2 = useMemo(() => [], []);

  useEffect(() => {
   setNav1(slider1);
   setNav2(slider2);
 }, [slider1, slider2]);

  let formatData = state.data.filter(
   (data) => data.type === "home"
 );
   return (
      <section className="home__topmovie panel ">
         <Slider
            {...setting2}
            className="home__wrapper"
            asNavFor={nav2}
            ref={(slider) => (slider1 = slider)}
         >
            {formatData.map(function (data, index) {
               return <Slide1 key={index} props={data} />;
            })}
         </Slider>

         {/*============= small slider========= */}
         <div className="home__small-slider-wrapper">
            <div className="grid wide xyz">
               <div className="row">
               <div className="col l-12">
               <Slider
               {...settings}
               asNavFor={nav1}
               ref={(slider) => (slider2 = slider)}
               swipeToSlide={true}
               focusOnSelect={true}
               className="home__slide-children"
               >
               {formatData.map(function (data, index) {
                  return (
                     <Slide2
                     key={index}
                     props={data}
                     isChangeSize={false}
                     />
                  );
               })}
               </Slider>
               </div>
               </div>
            </div>
         </div>
         {state.play ? <MovieInfor props={state.currentMovie} /> : <></>}
      </section>
   )
}

export default SliderSection
