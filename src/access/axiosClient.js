import axios from "axios";
import REplace from "../asset/image/REplace.jpg";
const API__IMG = "https://image.tmdb.org/t/p/w500";

export const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "content-type": "application/json"
  }
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data.results) {
      const result = response.data.results.map((fomatData) => {
        const imgPoster = fomatData.poster_path;
        const imgBack = fomatData.backdrop_path;
        return {
          ...fomatData,
          poster_path: API__IMG + imgPoster,
          backdrop_path: imgBack ? API__IMG + imgBack : REplace,
          isLiked: false
        };
      });
      return result;
    }
    if (response && response.data) {
      const imgPoster = response.data.poster_path;
      const imgBack = response.data.backdrop_path;
      const result = {
        ...response.data,
        poster_path: API__IMG + imgPoster,
        backdrop_path: imgBack ? API__IMG + imgBack : REplace,
        isLiked: false
      };
      return result;
    }

    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  }
);
export const axiosSearch = axios.create({
  baseURL: process.env.REACT_APP_API_URL1,
  headers: {
    "content-type": "application/json"
  }
});
axiosSearch.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      const result = response.data.results.map((fomatData) => {
        const imgPoster = fomatData.poster_path;
        const imgBack = fomatData.backdrop_path;
        return {
          ...fomatData,
          poster_path: API__IMG + imgPoster,
          backdrop_path: imgBack ? API__IMG + imgBack : REplace,
          isLiked: false
        };
      });
      return result;
    }

    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  }
);
export const axiosAuthentication = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "content-type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTczYjRlYWM0ZGUxOWQ2MTE1N2U5ZmIwZWRmYWU1ZiIsInN1YiI6IjYwOWNlMzRmMjhkN2ZlMDAyOTY5MTBmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q0VrULduhSj-0W4CH3hEZphTTvb5F_kH8WeONc1mFS4"
  }
});
axiosAuthentication.interceptors.response.use((response) => {
  if (response && response.data) {
    return response.data.request_token;
  }
  return response;
});
export const axiosPostValidateWithLogin = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "content-type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTczYjRlYWM0ZGUxOWQ2MTE1N2U5ZmIwZWRmYWU1ZiIsInN1YiI6IjYwOWNlMzRmMjhkN2ZlMDAyOTY5MTBmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q0VrULduhSj-0W4CH3hEZphTTvb5F_kH8WeONc1mFS4"
  }
});
axiosPostValidateWithLogin.interceptors.response.use((response) => {
  if (response && response.data) {
    return response.data.request_token;
  }
  return response;
});
