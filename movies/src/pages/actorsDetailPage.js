import React from "react";
import { useParams } from 'react-router-dom';
import MovieDetails from "../components/movieDetails/";
import PageTemplate from "../components/templateMoviePage";
import { getActor, getActorCredits } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import MovieList from "../components/movieList";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

const ActorsPage = (props) => {
  const { id } = useParams();
  const { data: actor, error: aError, isLoading: aisLoading, isError: aisError } = useQuery(
    ["actor", { id: id }],
    getActor 
  );
  
 
  const { data: creditData , error: CreError, isLoading: CreIsLoading, isError: CreIsError } = useQuery(
  ["credits", { id: id }],
  getActorCredits);

  const isLoading = CreIsLoading || aisLoading 
  const isError = aisError || CreIsError 
  const error = [CreError, aError, ]


  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <>
      {actor ? (
          <>
      <PageTemplate actor={actor}>
        <MovieDetails actor={actor} />
      </PageTemplate>
      <Grid container 
      sx={{ padding: '20px', 
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          fontWeight: 'bold'}}>

            {creditData.cast.length > 0 ? (
        <Typography variant="h4" component="p" sx={{fontWeight: 'bold'}}>
              TV Shows & Movies that {actor.name} has starred in
         </Typography>) : ('')
            }

        <Grid item xs={12}>
          </Grid>
            <Grid item container spacing={5}>
              <MovieList title={'Credits'}  credits={creditData} ></MovieList>
          </Grid>
          {console.log(creditData.cast)}
      </Grid>
        </>
        
      ) : (
        <p>Waiting for actor details</p>
      )}
    </>
  );
};

export default ActorsPage;