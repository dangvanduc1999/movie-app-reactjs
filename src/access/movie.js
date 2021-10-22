import {
  axiosAuthentication,
  axiosClient,
  axiosGet,
  axiosPostCreateSession,
  axiosPostValidateWithLogin,
  axiosSearch
} from "./axiosClient";
export const API__KEY = "api_key=7973b4eac4de19d61157e9fb0edfae5f";
const movieApi = {
  getHome: (page = 1) => {
    const url = `/trending/movie/day?${API__KEY}&page=${page}`;
    return axiosClient.get(url);
  },
  getFilterData: (data, pages = 1) => {
    const { Genres, Year, Time, Sort } = data;
    const genres = Genres === "all" ? "" : `&with_genres=${Genres}`;
    const year = Year === "all" ? "" : `&year=${Year}`;

    const time = Time === "all" ? "" : `&with_runtime.gte =${Time}`;
    const sort = Sort === "all" ? "" : `&sort_by=${Sort}`;
    const url = `/discover/movie?${API__KEY}${genres}${year}${time}${sort}&page=${pages}`;

    return axiosClient.get(url);
  },

  getSearch: (query) => {
    const url = `/movie?${API__KEY}&language=en-US&page=1&include_adult=false&query=${query}`;
    return axiosSearch.get(url);
  },
  getTrailer: (idMovie) => {
    const url = `/movie/${idMovie}/videos?${API__KEY}&language=en-US`;
    return axiosClient.get(url);
  },
  getDetail: (idMovie) => {
    const url = `/movie/${idMovie}?${API__KEY}&language=en-US`;
    return axiosClient.get(url);
  },
  getCast: (idMovie) => {
    const url = `/movie/${idMovie}/credits?${API__KEY}&language=en-US`;
    return axiosClient.get(url);
  },
  getRequestToken: () => {
    const url = `/authentication/token/new?${API__KEY}`;
    return axiosAuthentication.get(url);
  },
  getAccountId: (sessionId) => {
    const url = `/account?${API__KEY}&session_id=${sessionId}`;
    return axiosGet.get(url);
  },
  getFavoriteMovie: (params) => {
    const url = `/account/${params.id}/favorite/movies?${API__KEY}&session_id=${params.sessionId}&language=en-US&sort_by=created_at.asc&page=1`;
    return axiosGet.get(url);
  },
  postMovieFavorite: (data) => {
    const url = `/account/${data.accountId}/favorite?${API__KEY}&session_id=${data.sessionId}`;
    return axiosGet.post(url, data.request_body);
  },
  postAuthentication: (data) => {
    const url = `/authentication/token/validate_with_login?${API__KEY}`;
    return axiosPostValidateWithLogin.post(url, data);
  },
  postCreateSession: (data) => {
    const url = `/authentication/session/new?${API__KEY}`;
    return axiosPostCreateSession.post(url, data);
  }
};

export default movieApi;
