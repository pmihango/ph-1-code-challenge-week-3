# Project Description

This a an app for the Flatiron Movie Theater.

The App name is Flatdango, that allows to view a list of movies, the movie poster, movies description and movie runtime 

Users can purchase movie tickets from the theater.


## Project Setup

Run this command to get the backend started:


$ json-server --watch db.json


Test your server by visiting this route in the browser:

http://localhost:3000/films

Then, open the `index.html` file on your browser to run the application.


## Core Deliverables

As a user, I can:

1. See the first movie's details, including its **poster, title, runtime,
   showtime, and available tickets** when the page loads. The number of
   available tickets will need to be derived by subtracting the number of
   `tickets_sold` from the theater's `capacity`. You will need to make a GET
   request to the following endpoint to retrieve the film data:

  


