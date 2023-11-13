import Joi from "joi";

export const CreateMovieSchema = Joi.object({
  name: Joi.string().required(),
  overview: Joi.string().required(),
  popularity: Joi.number().integer().min(0).required(),
  voteAverage: Joi.number().integer().min(0).required(),
  voteCount: Joi.number().integer().min(0).required(),
  releaseDate: Joi.string().required(),
  genre: Joi.array()
    .required()
    .items(
      Joi.object({
        id: Joi.number().integer().min(1).required(),
        name: Joi.string().required(),
      })
    ),
});
