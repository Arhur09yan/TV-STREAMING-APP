export const getLastViewedMovie = () => {
  return sessionStorage.getItem("lastViewedMovieId");
};

export const setLastViewedMovie = (movieId) => {
  sessionStorage.setItem("lastViewedMovieId", movieId);
};
