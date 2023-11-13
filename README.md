### Movie API

This is a simple movie API.This API simply retrieves data using the [TMDB](https://www.themoviedb.org) site's APIs and saves it to the [MongoDB](https://www.mongodb.com/). It also allows you to perform operations such as retrieving, adding and deleting this data with endpoints.

## Endpoints

The project has a total of 5 endpoints.

- /movies//get-movie-details [GET]

This endpoint allows you to take the 5 oldest movies on the tmdb site and save them to the database.

- /movies/findAll [GET]

This endpoint allows you to retrieve all recorded movies in the database.

- /movies/findById/:id [GET]

This enpdoint returns the details of the movie in the database with the id you sent in the url.

- /movies/save [POST]

This endpoint saves a new movie in the database with the information you entered in the body of the request.

- /movies/delete/:id [DELETE]

This endpoint deletes the movie from the database that matches the id you sent in the URL.

## Project Setup

# Requirements

- [MongoDB](https://www.mongodb.com/) must be installed and running in your computer.

- You must have the TMDB API key. [TMDP Documentation](https://developer.themoviedb.org/docs)

# Steps

- Clone this repository.

- Go to project folder.

- Open terminal and run `npm install`.

- You must enter the [MongoDB connection string](https://www.mongodb.com/basics/mongodb-connection-string#:~:text=How%20to%20get%20your%20MongoDB,connection%20string%20for%20your%20cluster.) and TMDB API Key in the .env extension file in the project files. You can also change the port in this file if you want. By default, the application runs on port 5000.

- While in the project folder, run `npm run build` command.It will create the dist folder by taking the build of the application.

- After the build process is completed, you can start the application by running the `npm run start` command.

