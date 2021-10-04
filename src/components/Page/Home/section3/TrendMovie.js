import React from "react";
import Button from "../../../buttton/Button";
import image1 from "../../../../asset/image/image1.jpg";
import "./TrendMovie.scss";

const TrendMovie = React.forwardRef((props, ref) => {
  return (
    <>
      <section className="home__siteMovie " ref={ref}>
        <div className="grid wide ">
          <div className="row no-gutters">
            <div className="col l-6 m-12 c-12 home__siteMovie-content">
              <h2 className="home__siteMovie-tittle">bailey</h2>
              <span>4.2(imdb)</span>
              <div className="home__siteMovie-tagPoint">
                <span className="home__siteMovie-tag">15+</span>{" "}
                <p>2hr:30mins</p>
              </div>
              <h3>movie of the years</h3>
              <p className="home__siteMovie-describer">
                Baileys Irish Cream is an Irish cream liqueur an alcoholic
                beverage flavoured with cream, cocoa, and Irish whiskey made by
                Diageo at Republic of Ireland and in Mallusk, Northern Ireland.
              </p>
              <Button
                text="PLAY"
                buttonSize="btn--medium"
                buttonStyle="btn--primary"
              />
            </div>
            <div className="col l-6 home__siteMovie-imgcontainer ">
              <div className="home__siteMovie-imgWrap">
                <div className="home__siteMovie-img">
                  <img src={image1} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});
export default TrendMovie;
