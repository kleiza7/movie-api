import { Genre } from "./Genre.interface";

export interface Movie {
  _id?: string;
  name: string;
  overview: string;
  popularity: number;
  voteAverage: number;
  voteCount: number;
  releaseDate: string;
  genre: Genre[];
}
