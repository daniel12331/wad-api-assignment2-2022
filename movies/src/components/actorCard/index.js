import React from "react";
import Card from "@mui/material/Card";
import { CardHeader } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png'
import { Link } from "react-router-dom";

export default function ActorCard(props) {
  const actor = props.actor;

  return (

<Card sx={{ maxWidth: 345, height: '100%' }}>
<CardHeader
        title={
          <Typography variant="h5" component="p">
            {actor.name}{" "}
          </Typography>
        }
      />
<CardMedia
  sx={{ height: 500 }}
  image={
    actor.profile_path
      ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
      : img
  }
/>
<CardContent>
  <Grid container >
  </Grid>
</CardContent>
<CardActions disableSpacing>
  <Link to={`/actors/${actor.id}`}>
    <Button variant="outlined" size="medium" color="primary">
      More Info ...
    </Button>
  </Link>
</CardActions>
</Card>
  );
}