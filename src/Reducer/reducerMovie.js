import {
  CHANGE_FAVORITE,
  CHANGE_PLAY,
  GET_CURRENT_MOVIE,
  GET_FILTERED_DATA,
  GET_FILTERED_DATA_NEW,
  GET_ID_LIKES,
  GET_INFINITY_PAGE_SCROLL,
  GET_MOVIE,
  GET_QUERY,
  GET_SELECTED_CONDITION_FILTER
} from "./type";

const reducerMovie = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_MOVIE:
      let newStateData = {
        ...state,
        data: [...state.data, ...payload]
      };
      return newStateData;
    case GET_INFINITY_PAGE_SCROLL:
      let newPageStateScroll = {
        ...state,
        indexInfinitieScroll: ++state.indexInfinitieScroll
      };
      return newPageStateScroll;
    case GET_ID_LIKES:
      let newStateId = {
        ...state,
        likes: {
          id: payload.id,
          type: payload.type
        }
      };
      return newStateId;
    case GET_QUERY:
      let newStateQuery = {
        ...state,
        query: payload
      };
      return newStateQuery;
    case GET_CURRENT_MOVIE:
      let newState = {
        ...state,
        currentMovie: payload
      };

      return newState;
    case GET_SELECTED_CONDITION_FILTER:
      let newSelected = {
        ...state,
        select: {
          ...state.select,
          ...payload
        }
      };
      return newSelected;
    case GET_FILTERED_DATA:
      let newFilteredData = {
        ...state,
        filteredData: [...state.filteredData, ...payload]
      };

      return newFilteredData;
    case GET_FILTERED_DATA_NEW:
      let newFilteredDataNEW = {
        ...state,
        filteredData: [...payload]
      };
      return newFilteredDataNEW;
    case CHANGE_PLAY:
      let newPlayState = {
        ...state,
        play: !state.play
      };
      return newPlayState;
    case CHANGE_FAVORITE:
      let newStateFavorite = { ...state, data: [...payload] };
      return newStateFavorite;
    default:
      return state;
  }
};
export default reducerMovie;
