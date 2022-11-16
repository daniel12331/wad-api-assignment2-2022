import React from "react";
import MovieHeader from "../headerMovie";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getMovieImages } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'

const TemplateMoviePage = ({ movie, children, actor, tvshow }) => {

  const checkMovieData = movie?.id
    const { data: imagesData , error, isLoading, isError } = useQuery(
    ["images", { id: movie?.id }],
    getMovieImages, {enabled: !!checkMovieData});



  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const images = imagesData?.posters
  const tvimage = tvshow

  return (
    
    <>
    {(movie?.id > 1) ? (
      <>
      <MovieHeader movie={movie} />
      <Grid container spacing={5} sx={{ padding: "15px" }}>
        <Grid item xs={3}>
          <div sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}>
            <ImageList 
                cols={1}>
                {images.map((image) => (
                    <ImageListItem key={image.file_path} cols={1}>
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                        alt={image.poster_path}
                    />
                    </ImageListItem>
                ))}
            </ImageList>
          </div>
        </Grid>

        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
      </>
      ) : (actor?.id > 1) ? (
        <>
        <MovieHeader actor={actor} />
      <Grid container spacing={5} sx={{ padding: "15px" }}>
      <Grid item xs={3}>
          <div sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}>
              <ImageList 
                cols={1}>
                    <ImageListItem key={actor.profile_path} cols={1}>
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                        alt={actor.poster_path}
                    />
                    </ImageListItem>
            </ImageList>
          </div>
        </Grid>
  
        <Grid item xs={9}>
          {children}
        </Grid>        
      </Grid>
    </>
      ) : (
        <>
        <Grid container spacing={5} sx={{ padding: "15px" }}>
          <Grid item xs={3}>
            <div sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}>
              <ImageList 
                  cols={1}>
                  
                      <ImageListItem key={tvimage.poster_path} cols={1}>
                      <img
                          src={`https://image.tmdb.org/t/p/w500/${tvimage.poster_path}`}
                          alt={tvimage.poster_path}
                      />
                      </ImageListItem>
                  
              </ImageList>
            </div>
          </Grid>
  
          <Grid item xs={9}>
            {children}
          </Grid>
        </Grid>
        </>
      )
    
    
    }
    </>

  
  );
};

export default TemplateMoviePage;