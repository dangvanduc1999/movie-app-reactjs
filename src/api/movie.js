import { axiosClient, axiosSearch } from "./axiosClient";
export const API__KEY = "api_key=7973b4eac4de19d61157e9fb0edfae5f";
const movieApi = {
  getHome: () => {
    const url = `/trending/movie/day?${API__KEY}`;
    return axiosClient.get(url);
  },
  getTheater: () => {
    const url =
      "/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&" +
      API__KEY;
    return axiosClient.get(url);
  },
  getDramma: () => {
    const url =
      "/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&" +
      API__KEY;
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
};

export default movieApi;
