import React from "react";
import { useParams } from 'react-router-dom';
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import { getTVShow,getTvShowSimilar } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import MovieList from "../components/movieList";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

const TvShowDetailPage = (props) => {
  const { id } = useParams();
  const { data: tvshow, error: aError, isLoading:aisLoading , isError: aisError } = useQuery(
    ["tvshow", { id: id }],
    getTVShow
  );

   const { data: simTvData , error: CreError, isLoading: CreIsLoading, isError: CreIsError } = useQuery(
  ["tv similar", { id: id }],
  getTvShowSimilar);

  const isLoading = CreIsLoading || aisLoading 
  const isError = aisError || CreIsError 
  const error = [CreError, aError ]

  const simmss = simTvData?.results

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    
    <>
      {tvshow ? (
        <>
          <PageTemplate tvshow={tvshow}>
            <MovieDetails movie={tvshow} />
          
          </PageTemplate>
          <Grid container 
      sx={{ padding: '20px', 
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          fontWeight: 'bold'}}>
        <Typography variant="h4" component="p" sx={{fontWeight: 'bold'}}>
              Similar TV Shows
         </Typography>

        <Grid item xs={12}>
          </Grid>
            <Grid item container spacing={5}>
              <MovieList title={'Popular TV Shows'}  movies={simmss} action={(movie) => {
     
    }}></MovieList>
          </Grid>
          {console.log(simTvData.results)}
      </Grid>
        </>
      ) : (
        <p>Waiting for tv show details</p>
      )}
    </>
    
  );
};

export default TvShowDetailPage;