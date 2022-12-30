# Assignment 2 - Web API.

Name: Daniel Marko

## Features.


 + JWT bearer token authorization
 + Upcoming + Discover Movies + Detail movie endpoints
 + Actor + Actor Credits + detail actor endpoints
 + Tvshows + Tv show similarity + detail tvshow endpoints
 + Add reviews and view reviews
 + view, add, delete nested favourites object in users to db
 + Register, delete and get all users from db
 + Implement Swagger-UI
 

## Setup requirements.

`Npm install` in both folders and then `npm run` in movies folder and `npm run dev` in the movies-api folder.

## API Configuration
______________________
NODEENV=development
PORT=8080
HOST=
mongoDB=YourMongoURL
seedDb=true
secret=YourJWTSecret
______________________

## API Design

- /api/movies/upcoming | GET | Gets a list of upcoming movies 
- /api/movies/discover | GET | Gets a list of discover movies 
- /api/movies/{id} | GET | Gets a single movie 
- /api/movies/{id}/images | GET | Get all images based on movie id
- /api/movies/review/{id} | GET | Get all reviews based on that movie id

- /api/actor/page/{pageNumber} | GET | Gets a list of actors based on page
- /api/actor/{id} | GET | Gets the actor details
- /api/actor/credits/{id} | GET | Gets a list of actor credits

- /api/genres/{type} | GET | Gets a list of genres for either movies or tvshows

- /api/addreviews/{id}/reviews | GET | Gets a list of reviews based on movie id
- /api/addreviews/{username}/reviews/{movieid} | POST | Post a review based on movie id

- /api/search/{searchtext}/{page}/{type} | GET | Get a list of either movies/actors/tvshows based on searchtext and type
- /api/tvshows/page/{pageNumber} | GET | Gets a list of tvshows
- /api/tvshows/{id} | GET | Gets a detailed view of tvshow based on id
- /api/tvshows/similar/{id} | GET | Gets a list of similar tv shows based on id

- /api/users/ | GET | Gets a list of users
- /api/users/ | POST | Creates a new user 
- /api/users/{id} | PUT | Updates a exisiting user
- /api/users/add/{username}/favourites | POST | Adds a favourite movie object to nested array of users
- /api/users/{username} | GET | gets list of favourites in nested array
- /api/users/{username}/delete/favourites | DELETE | Deletes the favourite from nested array.

## Swagger
To get access to swagger ui, you can view it by starting the movie api, and then `localhost:8080/swagger/`.

## Security and Authentication
JWT based auth - when a user is created or logged a bearer token is created giving them access to the protected routes, all pages are protected except from the login and signup page this allows
unauthorised access.

### Protected Routes
+ Discover Page
+ UpComing Page
+ Actor Page
+ Tvshow Page
+ Search Page
+ Favourites Page

### UnProtected Routes
+ Login Page
+ Sign Up page

## Integrating with React App
Most views like Discover, Upcoming, Actors, TvShows, etc.. are all pulled from the movie api, the data that is used from movie api is used from tmdb, I found it makes no
difference to have it using the original movie-api data or the tmdb data considering it has no function but only to create a view for the user. I used the likes of users,
reviews, nested favourites to used the movie-api but use data that is stored on the local mongodb.

## Independent learning (if relevant)
The implementation of swagger-ui, I learned how to implement and use swagger-ui, I was able to generate a interactive api documentation used in movie-api that 
allows people to look at the various apis and to use api calls directly from the swagger-ui web page, tutorial on how to use view the swagger-ui doc is done in the swagger
section up above.

