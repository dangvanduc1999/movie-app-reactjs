import React, { useEffect, useReducer } from "react";

import reducerMovie from "../Reducer/reducerMovie";
import { CHANGE_FAVORITE, GET_MOVIE } from "../Reducer/type";
import { getDramma, getHome, getSearch, getTheater } from "./FetchApi";
export const MovieContext = React.createContext();

const MovieContextProvider = ({ children }) => {
  const initialState = { likes: { id: "" }, data: [], query: "" };
  const [state, dispatch] = useReducer(reducerMovie, initialState);
  const { likes, data, query } = state;
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
    getHome().then((newData) => {
      dispatch({
        type: GET_MOVIE,
        payload: newData,
      });
    });
    getTheater().then((newData) =>
      dispatch({
        type: GET_MOVIE,
        payload: newData,
      })
    );
    getDramma().then((newData) =>
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
    dispatch({
      type: GET_MOVIE,
      payload: check,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  useEffect(() => {
    if (query.length > 0) {
      getSearch(query).then((data) => {
        dispatch({
          type: GET_MOVIE,
          payload: data,
        });
      });
    }
  }, [query]);
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
