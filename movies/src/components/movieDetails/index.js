import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import MovieReviews from "../movieReviews"



const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const MovieDetails = ({ movie, actor}) => {  

  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    //Movie Details
    (movie?.id > 1) ? (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {movie.overview}
      </Typography>

      <Paper 
        component="ul" 
        sx={{...root}}
      >
        <li>
          <Chip label="Genres" sx={{...chip}} color="primary" />
        </li>
        {movie?.genres?.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={{...chip}} />
          </li>
        ))}
      </Paper>
      <Paper component="ul" sx={{...root}}>
        <Chip icon={<AccessTimeIcon />} label={`${movie.runtime} min.`} />
        <Chip
          icon={<MonetizationIcon />}
          label={`${movie.revenue?.toLocaleString()}`}
        />
        <Chip
          icon={<StarRate />}
          label={`${movie?.vote_average} (${movie?.vote_count}`}
        />
        <Chip label={`Released: ${movie?.release_date}`} />
      </Paper>

      <Paper component="ul" sx={{...root}}
      >
        <li>
          <Chip label="Production Countries" sx={{...chip}} color="primary" />
        </li>
        {movie.production_countries?.map((s) => (
          <li key={s.name}>
            <Chip label={s.name} sx={{...chip}} />
          </li>
        ))}
      </Paper>
      <Fab
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
        sx={{
          position: 'fixed',
          bottom: '1em',
          right: '1em'
        }}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <MovieReviews movie={movie} />
      </Drawer>
      </>

      ) : (
        //Actor Details

        <>
        <Typography variant="h5" component="h3" >
                Biography
              </Typography>
              <Typography variant="h6" component="p">
                {actor.biography}
              </Typography>
        
                {(actor.deathday === null) ? 
                    console.log('not dead')
                    : (
                      <Paper component="ul" sx={{...root}} >
                      <li>
                        <Chip label="Death Day" sx={{...chip}} color="primary" />
                      </li>
                        <li>
                          <Chip label={actor.deathday} sx={{...chip}} />
                        </li>
                    </Paper>
                    ) 
                }

        <Paper component="ul" sx={{...root}} >
        <li>
          <Chip label="Birth Place" sx={{...chip}} color="primary" />
        </li>
          <li>
            <Chip label={actor.place_of_birth} sx={{...chip}} />
          </li>
      </Paper>
      <Paper component="ul" sx={{...root}} >
        <li>
          <Chip label="Birthday" sx={{...chip}} color="primary" />
        </li>
          <li>
            <Chip label={actor.birthday} sx={{...chip}} />
          </li>
      </Paper>
      <Paper component="ul" sx={{...root}} >
        <li>
          <Chip label="Popularity" sx={{...chip}} color="primary" />
        </li>
          <li>
            <Chip label={actor.popularity} sx={{...chip}} />
          </li>
      </Paper>
              </>
      )
      
  );
};
export default MovieDetails ;