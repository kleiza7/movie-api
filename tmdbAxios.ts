import axios, { AxiosInstance } from "axios";
import dotenv from "dotenv";
dotenv.config();

export const tmdbAxiosInstance: AxiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
  },
});
