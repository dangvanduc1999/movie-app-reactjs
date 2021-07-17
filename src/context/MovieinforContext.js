import React, { useState } from "react";

export const MovieInforContext = React.createContext();
function MovieInforProvider({ children }) {
  const [play, setPLay] = useState(false);
  const [currentMovie, setCurrentMovie] = useState({});
  const getPlay = () => {
    setPLay(!play);
  };
  const getMovie = (movie) => {
    setCurrentMovie(movie);
  };
  const MovieInforContextData = {
    play,
    currentMovie,
    getPlay,
    getMovie,
  };
  return (
    <MovieInforContext.Provider value={MovieInforContextData}>
      {children}
    </MovieInforContext.Provider>
  );
}
export default MovieInforProvider;
export const MovieInforConsumer = MovieInforContext.Consumer;
