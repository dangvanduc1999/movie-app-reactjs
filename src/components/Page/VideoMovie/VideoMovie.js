import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCast, getDetail, getTrailer } from "../../../context/FetchApi";
import "./VideoMovie.scss";

function CastInMovie({ cast: { profile_path, name, character } }) {
  return (
    <div className="cast">
      <div className="cast__image">
        <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt="" />
      </div>
      <p className="cast__name">{name}</p>
      <p className="cast__character">Character: {character}</p>
    </div>
  );
}

function VideoMovie() {
  let { id } = useParams();
  const [currentMovie, setCurrentMovie] = useState([]);
  const [cast, setCast] = useState([]);
  const [dataVideo, setDataVideo] = useState({});
  useEffect(() => {
    try {
      getTrailer(id).then((data) => {
        const length = data.length;
        setDataVideo(data[length - 1]);
      });
      getDetail(id).then((data) => {
        setCurrentMovie(data);
      });
      getCast(id).then((data) => {
        data.cast && setCast(data.cast);
      });
    } catch (err) {
      console.log(err);
    }
  }, [id]);
  if (!dataVideo) {
    return (
      <section className="videoMovie">
        <div className="videoMovie__video-wrapper ">
          <div className="grid wide abc">
            <div className="row">
              <div className="col l-12 m-12 c-12">
                <p className="videoMovie__notfound">
                  Sorry! video for this movie is not available
                </p>
              </div>
              <div className="col l-o-3 l-6 m-12 c-12 imgsorry">
                <img
                  src="https://www.nicereply.com/blog/wp-content/uploads/2017/03/pic-1-2.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  const { key } = dataVideo;
  const { runtime, title, overview, release_date, vote_average } = currentMovie;
  const time =
    runtime > 60
      ? `${(runtime - (runtime % 60)) / 60}hr : ${runtime % 60}mins`
      : `${runtime}hr`;
  const formatCast = cast.splice(0, 6);

  return (
    <>
      <section className="videoMovie">
        <div className="videoMovie__video-wrapper ">
          <div className="grid wide abc">
            <div className="row">
              <div className="col l-12 m-12 c-12">
                {key && (
                  <div className="videoMovie__trailer">
                    <iframe
                      width="560"
                      height="300"
                      src={
                        dataVideo.key &&
                        `${process.env.REACT_APP_URL_YOUTUBE}${key}`
                      }
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </div>
              <div className="col l-12  m-12  c-12">
                <div className="videoMovie__content">
                  <strong className="videoMovie__content-title">{title}</strong>
                  <span className="videoMovie__content-point">
                    {vote_average}(imdb)
                  </span>
                  <div className="videoMovie__content-info">
                    <span className="home__siteMovie-tag">15+</span>{" "}
                    <p>{time}</p>
                    <p>{release_date}</p>
                  </div>
                  <p className="videoMovie__content-describer">{overview}</p>
                </div>
              </div>
            </div>
            <div className="row">
              {formatCast.map((cast, id) => (
                <div key={id} className="col l-2  m-3 c-4  ">
                  <CastInMovie cast={cast} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default VideoMovie;
