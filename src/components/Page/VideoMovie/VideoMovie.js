import React from "react";
import power from "../../../asset/image/power.mp4";
import { useLocation } from "react-router-dom";
import "./VideoMovie.scss";

function VideoMovie() {
  let location = useLocation();
  const { title, overview, release_date } = location.state;

  return (
    <>
      <section className="videoMovie">
        <div className="videoMovie__video-wrapper ">
          <div className="grid wide abc">
            <div className="row">
              <div className="col l-10 l-o-1 m-12 c-12">
                <video controls>
                  <source src={power} type="video/mp4" />
                </video>
              </div>
              <div className="col l-10 l-o-1 m-12  c-12">
                <div className="videoMovie__content">
                  <strong className="videoMovie__content-title">{title}</strong>
                  <span className="videoMovie__content-point">4.2(imdb)</span>
                  <div className="videoMovie__content-info">
                    <span className="home__siteMovie-tag">15+</span>{" "}
                    <p>2hr:30mins</p>
                    <p>{release_date}</p>
                  </div>
                  <p className="videoMovie__content-describer">{overview}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default VideoMovie;
