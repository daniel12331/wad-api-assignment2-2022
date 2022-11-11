import React from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getUpComignMovies } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToPlaylistIcon from "../components/cardIcons/addToPlaylist";


const UpComingMoviePage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('upcoming movies', getUpComignMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const playlists = movies.filter(m => m.playlist)
  localStorage.setItem('playlists', JSON.stringify(playlists))
  const addToPlaylist = (movieId) => true
  console.log(playlists)

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={(movie) => {
        return <AddToPlaylistIcon movie={movie} />
      }}
    />
)};
export default UpComingMoviePage;