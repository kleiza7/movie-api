import axios, { AxiosInstance } from "axios";
import dotenv from "dotenv";
dotenv.config();

export class MovieUtil {
  tmdbAxiosInstance: AxiosInstance;

  constructor() {
    this.tmdbAxiosInstance = axios.create({
      baseURL: "https://api.themoviedb.org",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
      },
    });
  }

  getMovies = () => {
    return this.tmdbAxiosInstance.get(
      "/3/discover/movie?language=en-US&sort_by=primary_release_date.asc&vote_average.gte=8.4&vote_count.gte=1500&watch_region=TR&with_watch_providers=8"
    );
  };

  getGenres = () => {
    return this.tmdbAxiosInstance.get("/3/genre/movie/list?language=en");
  };
}
