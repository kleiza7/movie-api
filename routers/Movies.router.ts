import { Router } from "express";
import { MoviesController } from "../controllers/Movies.controller";
import { CreateMovieSchema } from "../joi-schemas";
import { joiMiddleware } from "../middlewares/joi.middleware";

export class MoviesRouter {
  constructor(
    private router: Router,
    private moviesController: MoviesController
  ) {}

  getRouter() {
    this.router.get("/get-movie-details", this.moviesController.getMovies);

    this.router.get("/findAll", this.moviesController.findAllMovies);

    this.router.get("/findById/:id", this.moviesController.findMovieById);

    this.router.post(
      "/save",
      [joiMiddleware(CreateMovieSchema)],
      this.moviesController.createMovie
    );

    this.router.delete("/delete/:id", this.moviesController.deleteMovieById);

    return this.router;
  }
}
