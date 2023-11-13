import dotenv from "dotenv";
import express, { Application } from "express";
import mongoose from "mongoose";
import { MoviesController } from "./controllers/Movies.controller";
import { MoviesRouter } from "./routers/Movies.router";

dotenv.config();

class Server {
  constructor(private moviesRouter: MoviesRouter) {
    this.startServer();
  }

  startServer() {
    const app: Application = express();
    const port = process.env.PORT || 5000;

    app.use(express.json());

    app.use("/movies", this.moviesRouter.getRouter());

    mongoose
      .connect(process.env.MONGO_DB_CONNECTION_URL || "")
      .then(() =>
        app.listen(port, () => {
          console.log(`Server is Fire at http://localhost:${port}`);
        })
      )
      .catch((_) => console.log("Can not connected db"));
  }
}

const router = express.Router();

const moviesController = new MoviesController();

const moviesRouter = new MoviesRouter(router, moviesController);

new Server(moviesRouter);
