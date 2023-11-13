import mongoose, { Schema } from "mongoose";

const movieSchema = new Schema({
  name: String,
  overview: String,
  popularity: Number,
  voteAverage: Number,
  voteCount: Number,
  releaseDate: String,
  genre: {
    type: [{ id: Number, name: String }],
    default: [],
  },
});

export const MovieSchema = mongoose.model("netflix.movies", movieSchema);
