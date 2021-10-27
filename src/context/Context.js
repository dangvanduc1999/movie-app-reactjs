import React, { useEffect, useReducer, useState, useCallback } from "react";

import reducerMovie from "../Reducer/reducerMovie";
import {
  CHANGE_FAVORITE,
  GET_FILTERED_DATA,
  GET_FILTERED_DATA_NEW,
  GET_MOVIE
} from "../Reducer/type";
import { getFilterData, getHome, getSearch } from "./FetchApi";
export const MovieContext = React.createContext();

const MovieContextProvider = ({ children }) => {
  const initialState = {
    likes: { id: "" },
    data: [],
    indexInfinitieScroll: 1,
    query: "",
    play: false,
    currentMovie: [],
    select: {
      Genres: "all",
      Year: "all",
      Time: "all",
      Sort: "all"
    },
    filteredData: []
  };
  const [state, dispatch] = useReducer(reducerMovie, initialState);
  const { likes, data, query, indexInfinitieScroll, select, filteredData } =
    state;
  const [flag, setFlag] = useState(select);
  const [check, setCheck] = useState([]);
  // ==== data favoriet movie with id

  const updateFavoriteMovie = useCallback(
    async (data) => {
      let wait = await likes;
      let update = await data.reduce((x, y) => {
        if (y.id === wait.id) {
          x.push({
            ...y,
            isLiked: !y.isLiked
          });
        } else {
          x.push(y);
        }
        return x;
      }, []);
      return update;
    },
    [likes]
  );
  useEffect(() => {
    try {
      getHome(indexInfinitieScroll).then((newData) => {
        dispatch({
          type: GET_MOVIE,
          payload: newData
        });
      });
    } catch (e) {
      console.log(e);
    }
  }, [indexInfinitieScroll]);

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
      payload: check
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  useEffect(() => {
    if (query.length > 0) {
      getSearch(query).then((data) => {
        dispatch({
          type: GET_MOVIE,
          payload: data
        });
      });
    }
  }, [query]);
  // ========== Get favorite movie with id=====================
  useEffect(() => {
    updateFavoriteMovie(data).then((data) =>
      dispatch({
        type: CHANGE_FAVORITE,
        payload: data
      })
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [likes]);

  useEffect(() => {
    if (check.indexOf(likes.id) === -1) {
      updateFavoriteMovie(filteredData).then((dataMovie) => {
        const fmdata = dataMovie.filter((movie) => movie.isLiked === true);
        const dataUpdate = [...data, ...dataMovie];
        localStorage.setItem("filteredData", JSON.stringify(fmdata));
        dispatch({
          type: CHANGE_FAVORITE,
          payload: dataUpdate
        });
        setCheck((prev) => [...prev, likes.id]);
      });
    } else {
      updateFavoriteMovie(filteredData).then((dataMovie) => {
        const fmdata = data.filter((movie) => movie.id !== likes.id);

        const dataUpdate = [...fmdata];
        dispatch({
          type: CHANGE_FAVORITE,
          payload: dataUpdate
        });
        setCheck((prev) => {
          const fmtCheck = prev.filter((x) => x !== likes.id);
          return fmtCheck;
        });
      });
    }
  }, [likes]);
  // =============== filter data ===========================

  useEffect(() => {
    try {
      if (flag === select) {
        getFilterData(select, indexInfinitieScroll).then((data) => {
          dispatch({ type: GET_FILTERED_DATA, payload: data });
        });
      } else {
        setFlag(select);
        getFilterData(select).then((data) => {
          dispatch({ type: GET_FILTERED_DATA_NEW, payload: data });
        });
      }
    } catch (err) {
      console.log(err);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [select, indexInfinitieScroll]);
  // ========== context data ==========
  const movieContextData = {
    state,
    dispatch
  };

  return (
    <MovieContext.Provider value={movieContextData}>
      {children}
    </MovieContext.Provider>
  );
};

export const MovieContextConsumer = MovieContext.Consumer;
export default MovieContextProvider;
