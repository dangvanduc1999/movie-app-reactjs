import { CHANGE_FAVORITE, GET_ID_LIKES, GET_MOVIE, GET_QUERY } from "./type";

const reducerMovie = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_MOVIE:
      let newStateData = {
        ...state,
        data: [...state.data, ...payload],
      };
      return newStateData;
    case GET_ID_LIKES:
      let newStateId = {
        ...state,
        likes: {
          id: payload,
        },
      };
      return newStateId;
    case GET_QUERY:
      let newStateQuery = {
        ...state,
        query: payload,
      };
      return newStateQuery;
    case CHANGE_FAVORITE:
      let newStateFavorite = { ...state, data: [...payload] };
      return newStateFavorite;
    default:
      return state;
  }
};
export default reducerMovie;
