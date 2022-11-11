import React from "react";
import ActorCard from "../actorCard"
import MovieCard from "../movieCard";
import Grid from "@mui/material/Grid";

const MovieList = ( {actors, movies, action, title}) => {



  let movieCards = movies?.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <MovieCard key={m.id} movie={m} action={action} />
    </Grid>
    
  ))
  
 
  let actorCards = actors?.map((a) => (
    <Grid key={a.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <ActorCard key={a.id} actor={a} />
    </Grid>
  ));

 
  
    return(title === 'Discover Movies' || title === 'Upcoming Movies')? movieCards: actorCards


 

    

  };

export default MovieList;