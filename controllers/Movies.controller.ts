import { Request, Response } from "express";
import mongoose from "mongoose";
import { Genre, Movie, TMDBMovie } from "../interfaces";
import { MovieSchema } from "../schemas";
import { MovieUtil } from "../utils/Movie.util";

export class MoviesController {
  constructor(private movieUtil: MovieUtil) {}

  async getMovies(_: Request, res: Response) {
    try {
      const responses = await Promise.all([
        this.movieUtil.getMovies(),
        this.movieUtil.getGenres(),
      ]);

      const movies: TMDBMovie[] = responses[0].data.results.slice(0, 5);

      const genres: Genre[] = responses[1].data.genres;

      const formattedMovies: Movie[] = movies.map((movie) => {
        const movieGenres: Genre[] = [];

        movie.genre_ids.forEach((genreId) => {
          const genre = genres.find((genre) => genre.id === genreId);
          if (!genre) return;

          movieGenres.push(genre);
        });

        return {
          name: movie.original_title,
          overview: movie.overview,
          popularity: movie.popularity,
          releaseDate: movie.release_date,
          voteAverage: movie.vote_average,
          voteCount: movie.vote_count,
          genre: movieGenres,
        };
      });

      await MovieSchema.create(formattedMovies);

      res
        .status(200)
        .send({ message: "Movies fetched and saved successfully." });
    } catch (error) {
      res.status(404).json({ message: "An error occurred when fetch movies." });
    }
  }

  async findAllMovies(_: Request, res: Response) {
    try {
      const movies = await MovieSchema.find();

      res.status(200).json({ movies });
    } catch (error) {
      res.status(404).json({ message: "An error occurred." });
    }
  }

  async findMovieById(req: Request, res: Response) {
    try {
      const { id } = req.params;

      if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({ message: "Id is not valid." });
        return;
      }

      const movie = await MovieSchema.findById(id);

      if (!movie) {
        res.status(400).json({ message: "Movie not found with this id." });
        return;
      } else {
        res.status(200).json(movie);
      }
    } catch (error) {
      res.status(404).json({ message: "An error occurred." });
    }
  }

  async createMovie(req: Request, res: Response) {
    try {
      const response = await MovieSchema.create(req.body);

      res.status(200).json(response);
    } catch (error) {
      res.status(404).json({ message: "An error occurred." });
    }
  }

  async deleteMovieById(req: Request, res: Response) {
    try {
      const { id } = req.params;

      if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({ message: "Id is not valid." });
        return;
      }

      await MovieSchema.findOneAndDelete({ _id: id });

      res.status(200).json({ message: "Movie deleted successfully." });
    } catch (error) {
      res.status(404).json({ message: "An error occurred." });
    }
  }
}
