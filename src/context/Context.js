import React, { useState, useEffect } from "react";
import { API__KEY, API__URL, API__URL1, API__URL2 } from "./APIS";
import getMovie from "./FetchApi";
export const MovieContext = React.createContext();

const MovieContextProvider = ({ children }) => {
  const [likes, setLike] = useState({});
  const [data, setData] = useState([]);

  //  handle search
  const [query, setQuery] = useState("");

  const API__URL3 = `https://api.themoviedb.org/3/search/movie?${API__KEY}&language=en-US&page=1&include_adult=false&query=${query}`;
  // ==== data favoriet movie with id
  const updateFavoriteMovie = async (data) => {
    let wait = await likes;
    let update = await data.reduce((x, y) => {
      if (y.id === wait.id) {
        x.push({
          ...y,
          isLiked: !y.isLiked,
        });
      } else {
        x.push(y);
      }
      return x;
    }, []);
    return update;
  };

  useEffect(() => {
    getMovie(API__URL, "home").then((newData) =>
      setData((data) => [...data, ...newData])
    );
  }, []);
  useEffect(() => {
    getMovie(API__URL1, "theater").then((newData) =>
      setData((data) => [...data, ...newData])
    );
  }, []);
  useEffect(() => {
    getMovie(API__URL2, "dramma").then((newData) =>
      setData((data) => [...data, ...newData])
    );
  }, []);
  useEffect(() => {
    let check = data.filter((format) => {
      let arr = [];
      if (
        format.isLiked === true ||
        (format.isLiked === false && format.search === "non-active")
      ) {
        arr.push(format);
      }
      return arr;
    });
    setData(check);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  useEffect(() => {
    if (query.length > 0) {
      getMovie(API__URL3, query, "active").then((data) => {
        setData((prev) => [...prev, ...data]);
      });
    }
  }, [query, API__URL3]);
  // ========== Get favorite movie with id=====================

  useEffect(() => {
    updateFavoriteMovie(data).then((data) => setData(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [likes]);

  // get id of liked movie
  const getFavoriteMovie = (likeMovie) => {
    setLike(likeMovie);
  };
  // get query string to search
  const getQueryString = (query) => {
    setQuery(query);
  };

  // ========== context data
  const movieContextData = {
    data,
    likes,
    query,
    getFavoriteMovie,
    getQueryString,
  };

  return (
    <MovieContext.Provider value={movieContextData}>
      {children}
    </MovieContext.Provider>
  );
};

export const MovieContextConsumer = MovieContext.Consumer;
export default MovieContextProvider;
