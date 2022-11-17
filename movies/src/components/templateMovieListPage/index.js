import React from "react";
import Header from "../headerMovieList";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid";



function MovieListPageTemplate({ movies, title, action, actors, type}) {

  const displayedPopularActors = actors

  

  return (
    
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        
        <MovieList title={title} action={action} movies={movies} actors={displayedPopularActors} type={type}></MovieList>
      </Grid>
    </Grid>
  
 
  );
}
export default MovieListPageTemplate;