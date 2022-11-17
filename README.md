# Assignment 1 - ReactJS app.

Name: Daniel Marko

## Overview.

Web Application, that displays discover movies, Upcoming movies, Tv shows and popular actors, It allows for a user to make an account which is stored on a firestore DB and only access the website contents if a user is logged in or is registered, the user also have the options to filter discover movie page via a specfic genre of their choice and the exact same with the TV show page. Users can look at actors and details about them (TV shows and movies they have casted in), users can look into further details with TV shows also and will have a feature to look at similar TV shows related to the tv show they have selected, Users can also search for their favourite movies, Tv Shows and Actors to learn more about them.

### Features.

+ Firebase Authentication
+ Popular TV Show page
+ Popular Actors page
+ Detailed TV Show
+ List of Similar TV Shows
+ Detailed Actor Page
+ List of Shows + Movies the Actor has been in
+ Genre Filter for Movies
+ Genre Filter for TV Shows
+ Searching Movies 
+ Searching TV Shows
+ Searching Actors
+ Pagination
+ Caching

## Setup requirements.

First when cloned, go change directory to movies and
```
npm install
```
via terminal, then create a .env in the movies folder and then add and replace the following with your API key
```
REACT_APP_TMDB_KEY=5dfcbe6bc75e240b37587a22bcc4254b
FAST_REFRESH=false
```

## API endpoints.

+ List of popular actors - movies/actors
+ List of TV shows - movies/actors
+ Detailed Actor = /actors/:id
+ Detailed TV show = /tvshows/:id
+ Get Actor Credits = /actors/:id
+ Get Similar TV shows = /tvshows/:id
+ Get Search = /searchpage


## Routing.


+ /movies/actors - List of Popular Actors
+ /movies/tvshows - List of TV shows
+ /actors/:id - Detail of specific actor
+ /tvshows/:id - Detail of tv show
+ /searchpage - Search Page with searching on movies,tv shows and actors
+ /landing - Register/Login page


## Independent learning.
I started with understanding the tmdb api docs and figuring out what I would like to implement, I was primarily interested in how to search for specific movies at this point I didnt realise there was a dedicated **searching** end point that only requires to pass in what category you want to search.

At this point I have implemented some of the pages and wanted to add pagination, I attempted to make a pagination component which worked ok, but then realised that there was a **pagination** mui material component which was super easy to understand and use.

I then had some issues with my querys I didnt want them to fire off straight away e.g.(Search Page), I then found you can add the enabled: false which stopped the query from automatically running, and added **refetch** method that allowed me to call refetch() in possibly a onClick and only then when its clicked the query is called, also learnt how to use **multiple usequeries** in one page.

I also implemented **firebase authentication** which required a simple email and password from a user to login to the website, I have used firebase before in kotlin, but using it in react is much different. I got to fully understand it considered I was looking at lot of outdated sources, when it came to protecting the routes there was many different methods some were outdated but a implementation of private routing using **Outlet**, whcich renders the child route element which is anything that is displayed when a user is signed in.

## References
+ [Pagination](https://mui.com/material-ui/react-pagination/)
+ [Firebase Implementation(Outdated)](https://youtu.be/qgRoBaqhdZc?list=LL)
+ [Firebase Docs](https://firebase.google.com/docs/firestore)
+ [Private Route Implementation](https://dev.to/iamandrewluca/private-route-in-react-router-v6-lg5)
+ [UseQuery functionality](https://stackoverflow.com/questions/62340697/react-query-how-to-usequery-when-button-is-clicked)
