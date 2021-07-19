import React, { useEffect, useReducer } from "react";
import { API__KEY, API__URL, API__URL1, API__URL2 } from "./APIS";
import getMovie from "./FetchApi";
import reducerMovie from "../Reducer/reducerMovie";
import { CHANGE_FAVORITE, GET_MOVIE } from "../Reducer/type";
export const MovieContext = React.createContext();

const MovieContextProvider = ({ children }) => {
  const initialState = { likes: { id: "" }, data: [], query: "" };
  const [state, dispatch] = useReducer(reducerMovie, initialState);
  const { likes, data, query } = state;

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
      dispatch({
        type: GET_MOVIE,
        payload: newData,
      })
    );
  }, []);
  useEffect(() => {
    getMovie(API__URL1, "theater").then((newData) =>
      dispatch({
        type: GET_MOVIE,
        payload: newData,
      })
    );
  }, []);
  useEffect(() => {
    getMovie(API__URL2, "dramma").then((newData) =>
      dispatch({
        type: GET_MOVIE,
        payload: newData,
      })
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
    // setData(check);
    dispatch({
      type: GET_MOVIE,
      payload: check,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  useEffect(() => {
    if (query.length > 0) {
      getMovie(API__URL3, query, "active").then((data) => {
        dispatch({
          type: GET_MOVIE,
          payload: data,
        });
      });
    }
  }, [query, API__URL3]);
  // ========== Get favorite movie with id=====================
  useEffect(() => {
    updateFavoriteMovie(data).then((data) =>
      // setData(data)
      dispatch({
        type: CHANGE_FAVORITE,
        payload: data,
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [likes]);

  // ========== context data
  const movieContextData = {
    state,
    dispatch,
  };

  return (
    <MovieContext.Provider value={movieContextData}>
      {children}
    </MovieContext.Provider>
  );
};

export const MovieContextConsumer = MovieContext.Consumer;
export default MovieContextProvider;
