import { tmdbAxiosInstance } from "../tmdbAxios";

export const getMovies = () => {
  return tmdbAxiosInstance.get(
    "/3/discover/movie?language=en-US&sort_by=primary_release_date.asc&vote_average.gte=8.4&vote_count.gte=1500&watch_region=TR&with_watch_providers=8"
  );
};

export const getGenres = () => {
  return tmdbAxiosInstance.get("/3/genre/movie/list?language=en");
};
